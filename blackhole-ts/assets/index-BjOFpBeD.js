import{r as i,j as e}from"./react-B2MP_kRR.js";import{c as Ne}from"./react-dom-BkK_s-8w.js";import{u as Se,F as Ae}from"./react-full-screen-C92leYY5.js";import{d as De,w as je,u as fe,a as Oe,C as Re,O as we}from"./@react-three-vNgos8Gk.js";import{a1 as Ce,g as G,a2 as Le,a3 as ie,n as ce,o as Me,v as Ue,t as Be,a4 as Pe,h as Fe}from"./three-BhR9ud7Z.js";import{M as He}from"./react-tooltip-D_F62iJD.js";/* empty css                     */import"./classnames-CIaAGU0w.js";import"./fscreen-CK07arYI.js";import"./react-use-measure-9yo6gGM-.js";import"./its-fine-BaoiJ6Fa.js";import"./react-reconciler-DwF3unMS.js";import"./scheduler-DV1PgV85.js";import"./@babel-CF3RwP-h.js";import"./three-stdlib-BuZqK12t.js";import"./postprocessing-3619mF8q.js";import"./zustand-qjm6-URX.js";import"./use-sync-external-store-BYZj_IeE.js";import"./@floating-ui-DAnteMKF.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))u(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const m of c.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&u(m)}).observe(document,{childList:!0,subtree:!0});function r(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function u(l){if(l.ep)return;l.ep=!0;const c=r(l);fetch(l.href,c)}})();const Ke=`varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;

void main() {
  vUv = uv;
  vPosition = position;
  vNormal = normal;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Ge=`#define PI 3.141592653589793238462643383279
#define DEG_TO_RAD (PI/180.0)
#define ROT_Y(a) mat3(1, 0, 0, 0, cos(a), sin(a), 0, -sin(a), cos(a))
#define ROT_Z(a) mat3(cos(a), -sin(a), 0, sin(a), cos(a), 0, 0, 0, 1)
#define ROTATION_SCALE_DOWN 0.29
#define USE_COMPUTED_ALPHA false
#define DOPPLER_GRADIENT_SMOOTHNESS 0.65

// Disk parameters
uniform float DISK_IN;
uniform float DISK_WIDTH;

// Temperature parameters
const float MIN_TEMPERATURE = 1000.0;
const float TEMPERATURE_RANGE = 39000.0;

// Background parameters
const float DEFAULT_BG_INTENSITY = 0.1;

// Uniforms
uniform float time;
uniform vec2 resolution;
uniform vec3 cam_pos;
uniform vec3 cam_dir;
uniform vec3 cam_up;
uniform float fov;
uniform vec3 cam_vel;
uniform bool accretion_disk;
uniform bool use_disk_texture;
uniform bool doppler_shift;
uniform bool lorentz_transform;
uniform bool beaming;
uniform bool show_stars;
uniform bool show_milkyway;
uniform bool orbit_enabled;
uniform float bg_intensity;
uniform float disk_intensity;
// Add bloom parameter uniforms
uniform float bloom_intensity;
uniform float bloom_threshold;
uniform float bloom_radius;
// Add glow parameter uniforms
uniform float glow_intensity;
// Add black hole rotation uniform
uniform float black_hole_rotation;
uniform bool jet_enabled;
uniform sampler2D bg_texture;
uniform sampler2D star_texture;
uniform sampler2D disk_texture;
uniform bool thermal_colormap_mode;
uniform float doppler_intensity;
uniform float beaming_intensity;
`,We=`vec2 square_frame(vec2 screen_size){
  vec2 position = 2.0 * (gl_FragCoord.xy / screen_size.xy) - 1.0; 
  // first make pixels arranged in 0..1
  // then by multiplying by 2 and subtracting 1, put them in -1..1
  return position;
}

vec2 to_spherical(vec3 cartesian_coord){
  // spherical projection
  // polar angles are directly used as horizontal and vertical coordinates
  // here angle to y-axis mapped to latitude (looking vertically 180 degrees)
  // xz plane to longitude (looking horizontally 360 degrees)
  vec2 uv = vec2(atan(cartesian_coord.z,cartesian_coord.x), asin(cartesian_coord.y)); 
  uv *= vec2(1.0/(2.0*PI), 1.0/PI); //long, lat
  uv += 0.5;
  return uv;
}

vec3 lorentz_transform_velocity(vec3 u, vec3 v){ 
  // u = ray
  // v = observer
  float speed = length(v);
  if (speed > 0.0){
    float gamma = 1.0/sqrt(1.0-dot(v,v));
    float denominator = 1.0 - dot(v,u);
    vec3 new_u = (u/gamma - v + (gamma/(gamma+1.0)) * dot(u,v)*v)/denominator;
    return new_u;
  }
  return u;
} `,Ye=`// Kerr metric utility functions

// Helper function for Kerr metric calculations
vec2 calculateKerrEffects(vec3 pos, float a) {
  float r = length(pos);
  float r2 = r * r;
  float a2 = a * a;
  float cos_theta = pos.y / r;
  float sin_theta = sqrt(1.0 - cos_theta * cos_theta);
  float rho2 = r2 + a2 * cos_theta * cos_theta;
  // Return omega and radial correction factor
  float omega = -2.0 * a * r / (rho2 * (rho2 + 2.0 * r));
  float radial_factor = 1.0 + a2 * cos_theta * cos_theta / (r2 * r2);
  return vec2(omega, radial_factor);
}

// Calculate acceleration based on black hole rotation
vec3 calculateAcceleration(vec3 pos, vec3 vel, float h2) {
  float r = length(pos);
  float r2 = r * r;
  // Use original Schwarzschild model when not rotating
  if (black_hole_rotation == 0.0) {
    return -1.5 * h2 * pos / (r2 * r2 * sqrt(r2));
  }
  // Kerr model for rotating black hole
  float a = black_hole_rotation * ROTATION_SCALE_DOWN;  // Scale down rotation effect
  vec2 kerr_effects = calculateKerrEffects(pos, a);
  float omega = kerr_effects.x;
  float radial_factor = kerr_effects.y;
  // Radial acceleration with Kerr corrections
  vec3 accel = -1.5 * h2 * pos / (r2 * r2 * sqrt(r2));
  accel *= radial_factor;
  // Add frame dragging acceleration
  vec3 phi_dir = vec3(-pos.x, 0.0, -pos.z);
  float phi_dot = length(phi_dir) > 0.0 ? dot(vel, phi_dir) / length(phi_dir) : 0.0;
  accel += cross(vec3(0.0, 1.0, 0.0), pos) * omega * phi_dot * 0.5;
  return accel;
} `,ze=`// Optimized temperature to color conversion with fewer branches
vec3 temp_to_color(float temp_kelvin){
  float threshold1 = 99.4708025861;
  float threshold2 = 329.698727446;
  float threshold3 = 288.1221695283;
  float threshold4 = 138.5177312231;
  vec3 color;
  // 1k ~ 40k rescale by dividing 100
  temp_kelvin = clamp(temp_kelvin, 1000.0, 40000.0) / 100.0;
  if (temp_kelvin <= 66.0){
    color.r = 255.0;
    color.g = temp_kelvin;
    color.g = threshold1 * log(color.g) - 161.1195681661;
    if (color.g < 0.0) color.g = 0.0;
    if (color.g > 255.0)  color.g = 255.0;
  } else {
    color.r = temp_kelvin - 60.0;
    if (color.r < 0.0) color.r = 0.0;
    color.r = threshold2 * pow(color.r, -0.1332047592);
    if (color.r < 0.0) color.r = 0.0;
    if (color.g > 255.0) color.r = 255.0;
    color.g = temp_kelvin - 60.0;
    if (color.g < 0.0) color.g = 0.0;
    color.g = threshold3 * pow(color.g, -0.0755148492);
    if (color.g > 255.0)  color.g = 255.0;  
  }
  if (temp_kelvin >= 66.0){
    color.b = 255.0;
  } else if (temp_kelvin <= 19.0){
    color.b = 0.0;
  } else {
    color.b = temp_kelvin - 10.0;
    color.b = threshold4 * log(color.b) - 305.0447927307;
    if (color.b < 0.0) color.b = 0.0;
    if (color.b > 255.0) color.b = 255.0;
  }
  color /= 255.0; // make it 0..1
  return color;
} `,Ve=`// Bloom function to enhance bright areas
vec3 applyBloom(vec3 color) {
    float brightness = dot(color, vec3(0.2126, 0.7152, 0.0722));
    if (brightness > bloom_threshold) {
        float bloomFactor = (brightness - bloom_threshold) * bloom_intensity;
        return color + color * bloomFactor;
    }
    return color;
} `,$e=`// Glow function for the accretion disk
vec3 applyGlow(vec3 color, float intensity) {
  // Calculate brightness using luminance weights
  float brightness = dot(color, vec3(0.2126, 0.7152, 0.0722));
  
  // Apply a soft glow based on brightness
  float glowFactor = smoothstep(0.2, 0.8, brightness) * intensity;
  
  // Create a glow color (slightly shifted toward white)
  vec3 glowColor = mix(color, vec3(1.0), 0.3);
  
  // Create a blurred glow by mixing with a slightly desaturated version
  vec3 blurredGlow = mix(glowColor, vec3(1.0), 0.5);

  // Clamp the glow color to 0.0 and 1.0
  vec3 colorClamped = clamp(color + blurredGlow * glowFactor, 0.0, 1.0);
  
  // Return the original color plus the glow
  return colorClamped;
} `,qe=`// https://gist.github.com/fieldOfView/5106319
// https://gamedev.stackexchange.com/questions/93032/what-causes-this-distortion-in-my-perspective-projection-at-steep-view-angles
// for reference

void main()	{
  vec4 black = vec4(0.0,0.0,0.0,1.0);
  vec4 white = vec4(1.0,1.0,1.0,1.0);

  // z towards you, y towards up, x towards your left
  float uvfov = tan(fov / 2.0 * DEG_TO_RAD);
  vec2 uv = square_frame(resolution); 

  uv *= vec2(resolution.x/resolution.y, 1.0);
  vec3 forward = normalize(cam_dir); // forward vector
  vec3 up = normalize(cam_up); // up vector
  vec3 nright = normalize(cross(forward, up)); // right vector
  up = cross(nright, forward);

  // generate ray
  vec3 pixel_pos = cam_pos + forward + nright * uv.x * uvfov + up * uv.y * uvfov;
  
  vec3 ray_dir = normalize(pixel_pos - cam_pos);

  // light aberration alters ray path 
  if (lorentz_transform) ray_dir = lorentz_transform_velocity(ray_dir, cam_vel);

  // initial color
  vec4 color = vec4(0.0,0.0,0.0,1.0);

  // geodesic by leapfrog integration
  vec3 point = cam_pos;
  vec3 velocity = ray_dir;
  vec3 c = cross(point, velocity);
  float h2 = dot(c, c);

  // for doppler effect
  float ray_gamma = 1.0 / sqrt(1.0 - dot(cam_vel, cam_vel));
  float ray_doppler_factor = ray_gamma * (1.0 + dot(ray_dir, -cam_vel));
    
  float ray_intensity = 1.0;
  // Apply correction according to Liouville’s theorem
  if (beaming) ray_intensity /= pow(ray_doppler_factor, 3.0);
  
  vec3 oldpoint; 
  float pointsqr;
  
  float distance = length(point);
  bool disk_hit = false;

  // Leapfrog geodesic
  for (int i = 0; i < NSTEPS; i++){ 
    oldpoint = point; // remember previous point for finding intersection
    point += velocity * STEP;
    
    // Calculate acceleration based on black hole rotation
    vec3 accel = calculateAcceleration(point, velocity, h2);
    velocity += accel * STEP;    
    
    // distance from origin
    distance = length(point);
    if (distance < 0.0) break;
    
    bool horizon_mask = distance < 1.0 && length(oldpoint) > 1.0;// intersecting eventhorizon
    // does it enter event horizon?
    if (horizon_mask) {
      color += black;
      break;
    }

    // Calculate and add jet color
    vec3 jet_color = calculateJet(point);
    color.rgb += jet_color;
    
    // Check if the disk should be rendered
    if (accretion_disk) {
      vec4 disk_result = calculateDisk(
        oldpoint, point, velocity, cam_pos, cam_dir, cam_up, ray_doppler_factor  
      );
      if (disk_result.a > 0.0 && !USE_COMPUTED_ALPHA) {
        color = mix(color, disk_result, disk_result.a);
        color += disk_result;
        disk_hit = true;
        break; // Stop at the first disk hit!
      } else {
        color += disk_result;
      }
      // color = mix(color, vec4(1.0, 0.5, 0.0, 1.0), disk_result.a);
    }
    // --- End Accretion Disk ---
  }
  
  if (!disk_hit && distance > 1.0) {
    ray_dir = normalize(point - oldpoint);
    color += applyStarsAndBackground(ray_dir, ray_doppler_factor);
  }
  gl_FragColor = color * ray_intensity;
} `,Je=`vec4 applyStarsAndBackground(
  vec3 ray_dir,
  float ray_doppler_factor
) {
  vec4 color = vec4(0.0, 0.0, 0.0, 0.0);
  vec2 tex_coord = to_spherical(ray_dir * ROT_Z(45.0 * DEG_TO_RAD));

  // Handle stars with luminance-based blending
  vec4 star_color = texture2D(star_texture, tex_coord);
  if (show_stars && star_color.g > 0.0) {
    float star_temperature = (MIN_TEMPERATURE + TEMPERATURE_RANGE * star_color.r);
    // arbitrarily sets background stars' velocity for random shifts
    float star_velocity = star_color.b - 0.5;
    float star_doppler_factor = sqrt((1.0 + star_velocity) / (1.0 - star_velocity));
    if (doppler_shift) star_temperature /= ray_doppler_factor * star_doppler_factor;
    
    vec3 temp_color = temp_to_color(star_temperature);
    float star_luminance = dot(temp_color, vec3(0.299, 0.587, 0.114));
    float star_blend = star_luminance * star_color.g * 0.38;
    color = mix(color, vec4(temp_color, 1.0), star_blend);
  }

  // Apply the background texture with proper blending
  float bg_strength = bg_intensity > 0.0 ? bg_intensity : DEFAULT_BG_INTENSITY;
  vec4 bg_color = texture2D(bg_texture, tex_coord);
  
  // Calculate luminance of background color to use as blend factor
  float bg_luminance = dot(bg_color.rgb, vec3(0.299, 0.57, 0.114));
  float blend_factor = bg_luminance * bg_strength * 0.4;
  
  // Blend the background with existing stars
  color = mix(color, bg_color, blend_factor);

  return color;
}
`,Xe=`

vec3 calculateJet(vec3 point) {
  vec3 color;
  // Jet parameters based on black_hole_rotation
  float jet_intensity = black_hole_rotation * 1.5 * ROTATION_SCALE_DOWN;
  float jet_radius = 0.1 + 0.16 * black_hole_rotation * ROTATION_SCALE_DOWN;
  float jet_length = 3.0 + 8.0 * black_hole_rotation * ROTATION_SCALE_DOWN;

  // --- Relativistic Jet ---
  if (jet_enabled && black_hole_rotation > 0.1) {
    float a = black_hole_rotation * ROTATION_SCALE_DOWN;
    float r_plus = 1.0 + sqrt(1.0 - a * a);
    float base_radius = 0.05; // base radius at the pole
    float cone_angle = 0.08; // controls the opening angle of the cone
    // North pole jet
    float north_dist = length(vec2(point.x, point.z));
    float north_y = point.y - r_plus;
    float north_jet_radius = base_radius + cone_angle * max(north_y, 0.0);
    // South pole jet
    float south_dist = length(vec2(point.x, point.z));
    float south_y = point.y + r_plus;
    float south_jet_radius = base_radius + cone_angle * max(-south_y, 0.0);
    bool in_north_jet = (north_dist < north_jet_radius) && (north_y > 0.0) && (north_y < jet_length);
    bool in_south_jet = (south_dist < south_jet_radius) && (south_y < 0.0) && (-south_y < jet_length);
    if (in_north_jet || in_south_jet) {
        float t = in_north_jet ? (north_y / jet_length) : (-south_y / jet_length);
        float core = 1.1 - smoothstep(0.0, north_jet_radius * 0.5, in_north_jet ? north_dist : south_dist); // bright core
        float edge = 1.0 - smoothstep(north_jet_radius * 0.8, north_jet_radius, in_north_jet ? north_dist : south_dist); // soft edge
        vec3 jet_color = mix(vec3(0.3, 0.7, 1.0), vec3(1.0, 1.0, 1.0), t); // blue to white
        jet_color = mix(jet_color, vec3(1.0, 0.7, 0.5), pow(t, 2.0)); // white to orange/red at tip
        float intensity = jet_intensity * core * (1.0 - t) + jet_intensity * 0.3 * edge * t;
        float fade = 1.0 - smoothstep(0.85, 1.0, t); // fade out at the tip
        color.rgb += jet_color * intensity * fade;
    }
  }
  return color;
}
// --- End Jet ---`,Ze=`// Accretion disk calculation function

vec3 thermal_colormap(float t, bool beaming) {
  vec3 blue = vec3(0.0, 0.0, 1.0);
  vec3 cyan = vec3(0.0, 1.0, 1.0);
  vec3 green = vec3(0.0, 1.0, 0.0);
  vec3 yellow = vec3(1.0, 1.0, 0.0);
  vec3 red = vec3(1.0, 0.0, 0.0);

  // Create ultra-smooth transitions with maximum overlap
  vec3 color = mix(blue, cyan, smoothstep(0.0, 0.4, t));
  color = mix(color, green, smoothstep(0.2, 0.6, t));
  
  // First mix yellow with green
  vec3 yellow_mix = mix(green, yellow, smoothstep(0.4, 0.7, t));
  // Then mix that result with red
  vec3 warm_colors = mix(yellow_mix, red, smoothstep(0.6, 1.0, t));

  if (beaming) {
    return mix(color, warm_colors, smoothstep(0.3, 0.7, t));
  }
  // Finally blend between the cool and warm colors
  return mix(color, warm_colors, smoothstep(0.3, 0.7, t));
}

// Helper: Disk intersection and geometry
struct DiskIntersection {
  bool hit;
  vec3 intersection;
  float r;
  float phi;
  vec3 disk_velocity;
  float disk_gamma;
  float disk_doppler_factor;
  float disk_temperature;
};

DiskIntersection getDiskIntersection(
  vec3 oldpoint,
  vec3 point,
  vec3 velocity,
  vec3 cam_pos,
  float time
) {
  DiskIntersection result;
  result.hit = false;
  if (oldpoint.y * point.y < 0.0) {
    float lambda = -oldpoint.y / velocity.y;
    result.intersection = oldpoint + lambda * velocity;
    result.r = length(result.intersection);
    if (DISK_IN <= result.r && result.r <= DISK_IN + DISK_WIDTH) {
      result.phi = atan(result.intersection.x, result.intersection.z);
      result.disk_velocity = vec3(-result.intersection.x, 0.0, result.intersection.z) / sqrt(2.0 * (result.r - 1.0)) / (result.r * result.r);
      if (black_hole_rotation > 0.0) {
        float a = black_hole_rotation * ROTATION_SCALE_DOWN;
        vec2 kerr_effects = calculateKerrEffects(result.intersection, a);
        float omega = kerr_effects.x;
        result.disk_velocity += cross(vec3(0.0, 1.0, 0.0), result.intersection) * omega * 0.8;
      }
      float rotation_speed = orbit_enabled ? 2.0 : 1.0;
      result.phi -= time * rotation_speed;
      result.phi = mod(result.phi, PI * 2.0);
      result.disk_gamma = 1.0 / sqrt(1.0 - dot(result.disk_velocity, result.disk_velocity));
      result.disk_doppler_factor = result.disk_gamma * (1.0 + dot(normalize(result.intersection - cam_pos), result.disk_velocity));
      result.disk_temperature = 9000.0 * (pow(result.r / DISK_IN, -3.0 / 4.0));
      result.hit = true;
    }
  }
  return result;
}

// Helper: Disk appearance/color
vec4 getDiskAppearance(
  DiskIntersection disk,
  vec3 cam_pos,
  vec3 cam_dir,
  vec3 cam_up,
  float ray_doppler_factor
) {
  float disk_temperature = disk.disk_temperature;
  float disk_doppler_factor = disk.disk_doppler_factor;
  float r = disk.r;
  float phi = disk.phi;

  // THERMAL COLORMAP MODE
  if (thermal_colormap_mode) {
    // Apply Doppler shift to temperature
    if (doppler_shift) {
      vec3 view_dir = normalize(disk.intersection - cam_pos);
      vec3 camera_right = normalize(cross(cam_dir, cam_up));
      float side_factor = dot(view_dir, camera_right);
      float disk_angle_factor = abs(dot(view_dir, vec3(0.0, 1.0, 0.0)));
      float angle_threshold = 0.4648;
      float angle_blend_smootness = angle_threshold * 0.40;
      float angle_blend = smoothstep(angle_threshold, angle_blend_smootness, disk_angle_factor);
      if (disk_angle_factor < angle_threshold) {
        float smooth_side = 1.0 - smoothstep(-0.7, 0.8, side_factor);
        float shift = (smooth_side - 0.5) * 1.0;
        shift *= smoothstep(0.0, 0.4, abs(shift)) * angle_blend;
        float radius_factor = pow(1.0 - smoothstep(DISK_IN, DISK_IN + DISK_WIDTH * 0.885, r), 1.7);
        shift *= mix(0.1, 4.0, radius_factor);
        shift *= doppler_intensity;
        if (shift > 0.0) {
          disk_temperature *= 1.0 - (shift) * 2.0;
        } else {
          disk_temperature *= 1.0 + abs(shift) * 1.0;
        }
      }
    }
    float t = clamp((disk_temperature - 500.0) / 9500.0, 0.01, 0.99);
    vec3 disk_color = thermal_colormap(t, false);
    float denom = max(ray_doppler_factor * disk_doppler_factor, 0.01);
    disk_color /= denom;
    float disk_alpha = 1.0;
    vec3 glowing_color = applyGlow(disk_color * disk_intensity, glow_intensity);
    if (beaming) {
      disk_color = thermal_colormap(clamp((disk_temperature - 210.0) / 7000.0, 0.1, 0.99), true);
      glowing_color = disk_color;
      glowing_color *= beaming_intensity;
    }
    glowing_color = clamp(glowing_color, 0.0, 1.0);
    return vec4(glowing_color, USE_COMPUTED_ALPHA ? disk_alpha : 1.0);
  }
  // TEXTURE MODE
  if (use_disk_texture) {
    vec2 tex_coord = vec2(
      mod(phi, 2.0 * PI) / (2.0 * PI),
      1.0 - (r - DISK_IN) / (DISK_WIDTH)
    );
    vec4 disk_color = texture2D(disk_texture, tex_coord);
    if (doppler_shift) {
      vec3 view_dir = normalize(disk.intersection - cam_pos);
      vec3 camera_right = normalize(cross(cam_dir, cam_up));
      float side_factor = dot(view_dir, camera_right);
      float disk_angle_factor = abs(dot(view_dir, vec3(0.0, 1.0, 0.0)));
      float angle_threshold = 0.4648;
      float angle_blend_smootness = angle_threshold * 0.435;
      float angle_blend = smoothstep(angle_threshold, angle_blend_smootness, disk_angle_factor);
      if (disk_angle_factor < angle_threshold) {
        float smooth_side = 1.0 - smoothstep(-0.8, 0.8, side_factor);
        float shift = (smooth_side - 0.555) * 0.92;
        shift *= smoothstep(0.0, 0.14, abs(shift)) * angle_blend;
        float radius_factor = pow(1.0 - smoothstep(DISK_IN, DISK_IN + DISK_WIDTH * 0.585, r), 0.9);
        shift *= mix(.699, 1.85, radius_factor);
        shift *= doppler_intensity;
        disk_color.r *= 1.0 + max(-shift, 0.0) * 4.9;
        disk_color.b *= 1.0 + max(shift, 0.0) * 4.9;
        float positive_shift_mix_factor = 0.75;
        float negative_shift_mix_factor = 0.75;
        if (beaming) {
          positive_shift_mix_factor = 1.95 * beaming_intensity;
          negative_shift_mix_factor = -0.985 * beaming_intensity;
        }
        float intensity = shift > 0.0 
          ? mix(1.0, positive_shift_mix_factor, shift)
          : mix(1.0, negative_shift_mix_factor, -shift);
        disk_color.rgb *= intensity;
      }
    }
    float denom = max(ray_doppler_factor * disk_doppler_factor, 0.01);
    disk_color.rgb /= denom;
    float disk_alpha = disk_color.a;
    if (beaming) disk_alpha /= pow(disk_doppler_factor, 3.0);
    vec3 glowing_color = applyGlow(disk_color.rgb * disk_intensity, glow_intensity);
    glowing_color = clamp(glowing_color, 0.0, 1.0);
    return vec4(glowing_color, disk_color.a);
  }
  // BLACKBODY MODE
  if (doppler_shift) {
    float doppler_factor = disk_doppler_factor;
    if (doppler_factor < 1.0) {
      disk_temperature *= 1.0 + (1.0 - doppler_factor) * 2.0;
    } else {
      disk_temperature /= doppler_factor * 1.5;
    }
  }
  vec3 disk_color = temp_to_color(disk_temperature);
  float denom = max(ray_doppler_factor * disk_doppler_factor, 0.01);
  disk_color /= denom;
  float disk_alpha = clamp(dot(disk_color, disk_color) / 3.0, 0.0, 1.0);
  if (beaming) disk_alpha /= pow(disk_doppler_factor, 3.0);
  vec3 glowing_color = applyGlow(disk_color * disk_intensity, glow_intensity);
  glowing_color = clamp(glowing_color, 0.0, 1.0);
  return vec4(glowing_color, USE_COMPUTED_ALPHA ? disk_alpha : 1.0);
}

// Main function
vec4 calculateDisk(
  vec3 oldpoint,
  vec3 point,
  vec3 velocity,
  vec3 cam_pos,
  vec3 cam_dir,
  vec3 cam_up,
  float ray_doppler_factor
) {
  // First calculate the intersection
  DiskIntersection disk = getDiskIntersection(oldpoint, point, velocity, cam_pos, time);
  if (disk.hit) {
    // Then calculate the appearance (color, texture, alpha, etc.)
    return getDiskAppearance(disk, cam_pos, cam_dir, cam_up, ray_doppler_factor);
  }
  // If the disk is not hit, return a black color
  return vec4(0.0);
}
`,Qe=`
${Ge}
${We}
${Ye}
${ze}
${Ve}
${$e}
${Je}
${Xe}
${Ze}
${qe}
`,et="/assets/star_noise-mIq4zipT.png",tt="/assets/milkyWay6MP-DWPkOyyM.jpg",ge="/assets/accretion_disk_natural-DmWwv7Qb.png",nt="/assets/accretion_disk_natural2-OF_9itZk.png",ot="/assets/accretion_disk_red_white-BvQN-yKv.png",rt="/assets/accretion_disk_red_white_purple-Cs4LHhRI.png",at="/assets/accretion_disk_arrows-CtafHLH1.png",lt="/assets/accretion_disk_yellow-Cd9PJf-N.png",st="/assets/accretion_disk_bright-Cp1TZaoy.png",it="/assets/accretion_disk_blue-DIABYurC.png",ct="/assets/accretion_disk_grid-CAe8vKFG.png",dt="/assets/accretion_disk_gridlines-D89IPeHo.png",ut="/assets/accretion_disk_chaotic-D8VXfHzu.png",pt="/assets/accretion_disk_thermal-BAYCdSjz.png",_t="/assets/accretion_disk_dust-Cux3p8BK.png",te={starUrl:et,milkywayUrl:tt,diskNaturalUrl:ge},f={NO_DISK:{value:"no_disk",label:"No Disk"},NONE:{value:"none",label:"No Texture (Blackbody)"},NATURAL:{value:"accretion_disk_natural.png",label:"Natural"},NATURAL2:{value:"accretion_disk_natural2.png",label:"Natural 2"},RED_STRIPES:{value:"accretion_disk_red_white.png",label:"Red stripes"},RED_PURPLE_STRIPES:{value:"accretion_disk_red_white_purple.png",label:"Red-Purple stripes"},GRID:{value:"accretion_disk_grid.png",label:"Checkboard"},GRID_LINES:{value:"accretion_disk_gridlines.png",label:"Grid lines"},THERMAL:{value:"accretion_disk_thermal.png",label:"Thermal"},ARROWS:{value:"accretion_disk_arrows.png",label:"Arrows"},CHAOTIC:{value:"accretion_disk_chaotic.png",label:"Turbulence"},YELLOW:{value:"accretion_disk_yellow.png",label:"Yellow"},BLUE:{value:"accretion_disk_blue.png",label:"Blue"},BRIGHT:{value:"accretion_disk_bright.png",label:"Bright"},DUST:{value:"accretion_disk_dust.png",label:"Dust"}},mt={[f.NATURAL.value]:ge,[f.NATURAL2.value]:nt,[f.RED_STRIPES.value]:ot,[f.RED_PURPLE_STRIPES.value]:rt,[f.GRID.value]:ct,[f.GRID_LINES.value]:dt,[f.ARROWS.value]:at,[f.YELLOW.value]:lt,[f.BLUE.value]:it,[f.BRIGHT.value]:st,[f.CHAOTIC.value]:ut,[f.THERMAL.value]:pt,[f.DUST.value]:_t},ht=Object.values(f),Z={DEFAULT_INTENSITY:.3,MIN_INTENSITY:.005},ne={ROTATION:{MIN:-.998,MAX:.998,DEFAULT:.9}},I={ORBIT:{RADIUS:9.5,SPEED:.2},DISTANCE:{MIN:5,MAX:15},INITIAL:{X:0,Y:1,Z:10}},ft={TIME:.2},de={HIGH:{steps:350,segments:64,stepSize:.08},LOW:{steps:140,segments:18,stepSize:.12}},a={BLOOM:{ENABLED:!0,INTENSITY:1.5,THRESHOLD:.3,RADIUS:.8},BEAMING:{ENABLED:!0},STARS:{ENABLED:!0},MILKYWAY:{ENABLED:!0},ORBIT:{ENABLED:!1},PERFORMANCE:{ENABLED:!0},DISK:{INTENSITY:1,DOPPLER_SHIFT:!0,INNER_RADIUS:2.45,WIDTH:4,DOPPLER_INTENSITY:1,BEAMING_INTENSITY:1},GLOW:{INTENSITY:0},BLACK_HOLE:{ROTATION:ne.ROTATION.DEFAULT,RELATIVISTIC_JET:!1},FOV:60},ue={performance:!1,bloom:!0,effects:!0,disk:!0,textures:!0,camera:!1},pe={enabled:a.BLOOM.ENABLED},$={intensity:a.GLOW.INTENSITY,min:0,max:3,step:.1},L={intensity:a.DISK.INTENSITY,beaming:a.BEAMING.ENABLED,dopplerShift:a.DISK.DOPPLER_SHIFT,diskTexture:f.CHAOTIC.value},Q={stars:a.STARS.ENABLED,milkyway:a.MILKYWAY.ENABLED},_e={orbit:!1},me={enabled:!0},_={bloomIntensity:{min:0,max:2,step:.1,default:1},bloomThreshold:{min:0,max:1,step:.1,default:.5},bloomRadius:{min:0,max:1,step:.1,default:.9},diskIntensity:{min:.1,max:2,step:.1},diskInnerRadius:{min:2,max:3.5,step:.1,default:a.DISK.INNER_RADIUS},diskWidth:{min:2,max:6.5,step:.1,default:a.DISK.WIDTH}},be="blackhole",g=!1,oe="localStorageChange",gt=o=>{window.dispatchEvent(new CustomEvent(oe,{detail:{key:o}}))};function s(o,t,r={}){const{reloadOnChange:u=!1,reloadDelay:l=100}=r,c=`${be}_${o}`,m=i.useRef(null),[p,E]=i.useState(()=>{try{const d=localStorage.getItem(c);return m.current=d,d?JSON.parse(d):t}catch(d){return console.error(`Error reading from localStorage: ${d}`),t}});return i.useEffect(()=>{try{const d=JSON.stringify(p);d!==m.current&&(localStorage.setItem(c,d),m.current=d,gt(c))}catch(d){console.error(`Error writing to localStorage: ${d}`)}},[c,p]),[p,d=>{try{const b=d instanceof Function?d(p):d;E(b),u&&setTimeout(()=>{window.location.reload()},l)}catch(b){console.error(`Error updating localStorage: ${b}`)}}]}function bt(o,t,r={}){return s(o,t,r)}function vt(o=be){const[t,r]=i.useState({}),u=i.useRef({});return i.useEffect(()=>{const l=()=>{const p={};let E=!1;for(let x=0;x<localStorage.length;x++){const d=localStorage.key(x);if(d&&d.startsWith(o))try{const b=d.slice(o.length+1),j=localStorage.getItem(d),S=j?JSON.parse(j):null;p[b]=S,JSON.stringify(u.current[b])!==JSON.stringify(S)&&(E=!0)}catch(b){console.error(`Error parsing localStorage item: ${b}`)}}(E||Object.keys(p).length!==Object.keys(u.current).length)&&(u.current=p,r(p))};l();const c=p=>{(!p.key||p.key.startsWith(o))&&l()},m=p=>{var E,x;(x=(E=p.detail)==null?void 0:E.key)!=null&&x.startsWith(o)&&l()};return window==null||window.addEventListener("storage",c),window==null||window.addEventListener(oe,m),()=>{window==null||window.removeEventListener("storage",c),window==null||window.removeEventListener(oe,m)}},[o]),t}function ve(){const[o,t]=s("bloomEnabled",a.BLOOM.ENABLED,{reloadOnChange:g}),[r,u]=s("bloomIntensity",a.BLOOM.INTENSITY,{reloadOnChange:g}),[l,c]=s("bloomThreshold",a.BLOOM.THRESHOLD,{reloadOnChange:g}),[m,p]=s("bloomRadius",a.BLOOM.RADIUS,{reloadOnChange:g});return{enabled:o,intensity:r,threshold:l,radius:m,setEnabled:t,setIntensity:u,setThreshold:c,setRadius:p}}function ke(){const[o,t]=s("diskTexture",L.diskTexture,{reloadOnChange:g,reloadDelay:100}),r=o===f.RED_PURPLE_STRIPES.value,u=o===f.NONE.value,l=o===f.NO_DISK.value;return{selectedTexture:o,setSelectedTexture:t,useStripes:r,useBlackbody:u,hideDisk:l}}const kt=i.memo(({enabled:o,intensity:t,threshold:r,radius:u})=>e.jsx(De,{children:e.jsx(je,{intensity:o?t:0,luminanceThreshold:r,luminanceSmoothing:.99,radius:u,mipmapBlur:!0,kernelSize:1})})),xt=()=>{const o=i.useRef(null),t=i.useRef(null),{camera:r,gl:u,scene:l}=fe(),{enabled:c,intensity:m,threshold:p,radius:E}=ve(),[x]=s("glowIntensity",a.GLOW.INTENSITY),d=x>0,{selectedTexture:b,useBlackbody:j,hideDisk:S}=ke(),[M]=s("beamingEnabled",a.BEAMING.ENABLED),[U]=s("starsEnabled",a.STARS.ENABLED),[O]=s("milkywayEnabled",a.MILKYWAY.ENABLED),[B]=s("orbitEnabled",a.ORBIT.ENABLED),[W]=s("performanceMode",a.PERFORMANCE.ENABLED),[P]=s("diskIntensity",a.DISK.INTENSITY),[Y]=s("dopplerShiftEnabled",a.DISK.DOPPLER_SHIFT),[q]=s("dopplerIntensity",a.DISK.DOPPLER_INTENSITY),[ee]=s("beamingIntensity",a.DISK.BEAMING_INTENSITY),[F]=s("blackHoleRotation",a.BLACK_HOLE.ROTATION),[z]=s("jetEnabled",a.BLACK_HOLE.RELATIVISTIC_JET),[H]=s("diskIn",a.DISK.INNER_RADIUS),[A]=s("diskWidth",a.DISK.WIDTH),D=i.useMemo(()=>{const h=new Ce,v=(C,T)=>{const N=h.load(C);return N.magFilter=T,N.minFilter=T,N.wrapS=ie,N.wrapT=ie,N},w=mt[b]||te.diskNaturalUrl;return{bgTexture:v(te.milkywayUrl,Me),starTexture:v(te.starUrl,ce),diskTexture:v(w,ce)}},[b]);i.useEffect(()=>{r.position.set(I.INITIAL.X,I.INITIAL.Y,I.INITIAL.Z),r.lookAt(0,0,0),r==null||r.addEventListener("change",()=>{const h=r.position.length();if(h>I.DISTANCE.MAX){const v=I.DISTANCE.MAX/h;r.position.multiplyScalar(v)}else if(h<I.DISTANCE.MIN){const v=I.DISTANCE.MIN/h;r.position.multiplyScalar(v)}})},[r]);const R=i.useMemo(()=>W?de.LOW:de.HIGH,[W]),J={time:{value:0},fov:{value:a.FOV},accretion_disk:{value:!S},use_disk_texture:{value:!j},lorentz_transform:{value:!0},doppler_shift:{value:Y},beaming:{value:M},bg_intensity:{value:O?Z.DEFAULT_INTENSITY:Z.MIN_INTENSITY},show_stars:{value:U},show_milkyway:{value:O},disk_intensity:{value:P},bloom_intensity:{value:m},bloom_threshold:{value:p},bloom_radius:{value:E},glow_intensity:{value:d?x:0},black_hole_rotation:{value:F},jet_enabled:{value:z},orbit_enabled:{value:B},DISK_IN:{value:H},DISK_WIDTH:{value:A},doppler_intensity:{value:q},beaming_intensity:{value:ee},thermal_colormap_mode:{value:b===f.THERMAL.value}},V=()=>{const h=`
      #define STEP ${R.stepSize}
      #define NSTEPS ${R.steps}
    `;return new Ue({vertexShader:Ke,fragmentShader:h+Qe,uniforms:{resolution:{value:new Fe(u.domElement.width,u.domElement.height)},cam_pos:{value:new G(0,3,10)},cam_dir:{value:new G(0,0,-1)},cam_up:{value:new G(0,1,0)},cam_vel:{value:new G(0,0,0)},bg_texture:{value:D.bgTexture},star_texture:{value:D.starTexture},disk_texture:{value:D.diskTexture},...J},transparent:!1,depthWrite:!0,blending:Pe,side:Be})};return i.useEffect(()=>{t.current&&(t.current.uniforms.disk_texture.value=D.diskTexture,t.current.needsUpdate=!0)},[D.diskTexture]),i.useEffect(()=>{t.current&&(t.current.uniforms.accretion_disk.value=!S,t.current.needsUpdate=!0)},[S]),i.useEffect(()=>{t.current&&(t.current.uniforms.bloom_intensity.value=m,t.current.uniforms.bloom_threshold.value=p,t.current.uniforms.bloom_radius.value=E,t.current.needsUpdate=!0)},[m,p,E]),i.useEffect(()=>{t.current&&(t.current.uniforms.beaming.value=M,t.current.needsUpdate=!0)},[M]),i.useEffect(()=>{t.current&&(t.current.uniforms.show_stars.value=U,t.current.needsUpdate=!0)},[U]),i.useEffect(()=>{t.current&&(t.current.uniforms.bg_intensity.value=O?Z.DEFAULT_INTENSITY:Z.MIN_INTENSITY,t.current.needsUpdate=!0)},[O]),i.useEffect(()=>{t.current&&(t.current.uniforms.disk_intensity.value=P,t.current.needsUpdate=!0)},[P]),i.useEffect(()=>{t.current&&(t.current.uniforms.doppler_shift.value=Y,t.current.needsUpdate=!0)},[Y]),i.useEffect(()=>{t.current&&(t.current.uniforms.glow_intensity.value=d?x:0,t.current.needsUpdate=!0)},[d,x]),i.useEffect(()=>{t.current&&(t.current.uniforms.black_hole_rotation.value=F,t.current.needsUpdate=!0)},[F]),i.useEffect(()=>{t.current&&(t.current.uniforms.jet_enabled.value=z,t.current.needsUpdate=!0)},[z]),i.useEffect(()=>{t.current&&(t.current.uniforms.DISK_IN.value=H,t.current.uniforms.DISK_WIDTH.value=A,t.current.needsUpdate=!0)},[H,A]),i.useEffect(()=>{if(t.current){const h=V();t.current.fragmentShader=h.fragmentShader,t.current.uniforms=h.uniforms,t.current.needsUpdate=!0}},[W]),i.useEffect(()=>{t.current&&(t.current.uniforms.thermal_colormap_mode.value=b===f.THERMAL.value,t.current.needsUpdate=!0)},[b]),Oe(h=>{if(t.current){const v=t.current.uniforms;v.time.value=h.clock.elapsedTime*ft.TIME;const w=u.domElement.width,C=u.domElement.height;if((v.resolution.value.x!==w||v.resolution.value.y!==C)&&v.resolution.value.set(w,C),B){const T=h.clock.elapsedTime*I.ORBIT.SPEED,N=Math.sin(T)*I.ORBIT.RADIUS,X=Math.cos(T)*I.ORBIT.RADIUS;r.position.set(N,1,X),r.lookAt(0,0,0)}if(!B){const T=r.position.length();if(T>I.DISTANCE.MAX){const N=I.DISTANCE.MAX/T;r.position.multiplyScalar(N)}else if(T<I.DISTANCE.MIN){const N=I.DISTANCE.MIN/T;r.position.multiplyScalar(N)}}v.cam_pos.value.copy(r.position),v.cam_dir.value.copy(r.getWorldDirection(new G)),v.cam_up.value.copy(r.up)}}),i.useEffect(()=>{const h=new Le(16777215,2,100);return h.position.set(0,0,0),l.add(h),()=>{l.remove(h)}},[l]),e.jsxs(e.Fragment,{children:[e.jsxs("mesh",{ref:o,children:[e.jsx("sphereGeometry",{args:[20,R.segments,R.segments]}),e.jsx("shaderMaterial",{ref:t,...V()})]}),e.jsx(kt,{enabled:c,intensity:m,threshold:p,radius:E})]})},xe=[0,5,15],Et=60,It=.1,yt=1e3,Tt=25,he=Tt*(Math.PI/180),Nt=new G(Math.sin(he),Math.cos(he),0),St={enablePan:!0,minDistance:3,maxDistance:13,rotateSpeed:.65,zoomSpeed:.5},At=()=>{const{camera:o}=fe();return i.useEffect(()=>{o.position.set(...xe),o.up.copy(Nt),o.lookAt(0,0,0)},[o]),null},Dt=()=>{const o=i.useRef(null);return e.jsxs(Re,{className:"canvas",camera:{position:xe,fov:Et,near:It,far:yt},gl:{antialias:!0,alpha:!1},children:[e.jsx(At,{}),e.jsx(we,{ref:o,...St}),e.jsx(xt,{})]})},y={DOWN:"▼",UP:"▲",RIGHT:"▶"},jt=({onFullScreen:o})=>{const[t,r]=i.useState(!1),{intensity:u,threshold:l,radius:c,setIntensity:m,setThreshold:p,setRadius:E}=ve(),[x,d]=s("glowIntensity",$.intensity,{reloadOnChange:g}),b=x>0,[j,S]=s("bloomEnabled",pe.enabled,{reloadOnChange:g}),{selectedTexture:M,setSelectedTexture:U}=ke(),[O,B]=s("beamingEnabled",L.beaming,{reloadOnChange:g}),[W,P]=s("starsEnabled",Q.stars,{reloadOnChange:g}),[Y,q]=s("milkywayEnabled",Q.milkyway,{reloadOnChange:g}),[ee,F]=s("orbitEnabled",_e.orbit,{reloadOnChange:g}),[z,H]=s("performanceMode",me.enabled,{reloadOnChange:g}),[A,D]=s("diskIntensity",L.intensity,{reloadOnChange:g}),[R,J]=s("dopplerShiftEnabled",L.dopplerShift,{reloadOnChange:g}),[V,h]=s("dopplerIntensity",a.DISK.DOPPLER_INTENSITY,{reloadOnChange:g}),[v,w]=s("beamingIntensity",a.DISK.BEAMING_INTENSITY,{reloadOnChange:g}),[C,T]=s("blackHoleRotation",a.BLACK_HOLE.ROTATION,{reloadOnChange:g}),[N,X]=bt("jetEnabled",a.BLACK_HOLE.RELATIVISTIC_JET,{reloadOnChange:g}),[k,re]=i.useState(ue),[ae,Ee]=s("diskIn",_.diskInnerRadius.default,{reloadOnChange:g}),[le,Ie]=s("diskWidth",_.diskWidth.default,{reloadOnChange:g}),K=n=>{re(se=>({...se,[n]:!se[n]}))},ye=n=>{n.stopPropagation(),U(n.target.value)},Te=n=>{n.stopPropagation(),localStorage.clear(),d($.intensity),S(pe.enabled),B(L.beaming),P(Q.stars),q(Q.milkyway),F(_e.orbit),H(me.enabled),D(L.intensity),J(L.dopplerShift),m(_.bloomIntensity.default),p(_.bloomThreshold.default),E(_.bloomRadius.default),T(a.BLACK_HOLE.ROTATION),X(a.BLACK_HOLE.RELATIVISTIC_JET),U(f.CHAOTIC.value),h(a.DISK.DOPPLER_INTENSITY),w(a.DISK.BEAMING_INTENSITY),re(ue)};return e.jsxs(e.Fragment,{children:[e.jsx(He,{id:"controls-tooltip",className:"controls-tooltip",place:"right",offset:15}),e.jsx("nav",{className:`controls-container ${t?"collapsed":""}`,children:e.jsxs("div",{className:"controls-panel","data-augmented-ui":"  tl-clip bl-clip  b-clip br-clip tr-2-clip-x border",children:[e.jsx("header",{className:"controls-header",children:e.jsxs("div",{className:"collapse-button",onClick:()=>r(!t),children:[e.jsx("img",{src:"/icon.svg",alt:"App Icon",style:{width:24,height:24,marginRight:8}}),e.jsx("span",{children:"Controls"}),t?y.DOWN:y.UP]})}),e.jsxs("div",{className:`controls-content ${t?"hidden":""}`,children:[e.jsxs("button",{id:"button-performance","data-augmented-ui":"border tl-clip tr-clip",className:"controls-title",onClick:()=>K("performance"),"aria-controls":"section-performance","aria-expanded":k.performance,children:[e.jsx("h3",{id:"title-performance",children:"Performance Controls"})," ",k.performance?y.DOWN:y.RIGHT]}),k.performance&&e.jsx("section",{id:"section-performance","aria-labelledby":"title-performance",children:e.jsx("div",{className:"control-group",children:e.jsxs("label",{className:"checkbox-label","data-tooltip-id":"controls-tooltip","data-tooltip-content":"Reduces quality to improve performance",children:[e.jsx("span",{children:"Performance Mode"}),e.jsx("input",{"data-augmented-ui":"border tl-clip br-clip",type:"checkbox",checked:z,onChange:n=>H(n.target.checked)})]})})}),e.jsxs("button",{id:"button-bloom","data-augmented-ui":"border tl-clip tr-clip",className:"controls-title bloom-controls-title",onClick:()=>K("bloom"),"aria-controls":"section-bloom","aria-expanded":k.bloom,children:[e.jsx("h3",{id:"title-bloom",children:"Bloom Controls"})," ",k.bloom?y.DOWN:y.RIGHT]}),k.bloom&&e.jsxs("section",{id:"section-bloom","aria-labelledby":"title-bloom",className:"bloom-controls",children:[e.jsx("div",{className:"control-group",children:e.jsxs("label",{className:"checkbox-label",children:[e.jsx("span",{children:"Bloom"}),e.jsx("input",{"data-augmented-ui":"border tl-clip br-clip",type:"checkbox",checked:j,onChange:n=>S(n.target.checked)})]})}),j&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"control-group",children:e.jsxs("label",{className:"slider-label",children:[e.jsx("span",{children:"Intensity:"}),e.jsx("input",{type:"range",min:_.bloomIntensity.min,max:_.bloomIntensity.max,step:_.bloomIntensity.step,value:u,onChange:n=>m(parseFloat(n.target.value)),className:"slider-input"}),e.jsx("span",{children:u.toFixed(2)})]})}),e.jsx("div",{className:"control-group",children:e.jsxs("label",{className:"slider-label",children:[e.jsx("span",{children:"Threshold:"}),e.jsx("input",{type:"range",min:_.bloomThreshold.min,max:_.bloomThreshold.max,step:_.bloomThreshold.step,value:l,onChange:n=>p(parseFloat(n.target.value)),className:"slider-input"}),e.jsx("span",{children:l.toFixed(2)})]})}),e.jsx("div",{className:"control-group",children:e.jsxs("label",{className:"slider-label",children:[e.jsx("span",{children:"Radius:"}),e.jsx("input",{type:"range",min:_.bloomRadius.min,max:_.bloomRadius.max,step:_.bloomRadius.step,value:c,onChange:n=>E(parseFloat(n.target.value)),className:"slider-input"}),e.jsx("span",{children:c.toFixed(2)})]})})]})]}),e.jsxs("button",{id:"button-effects","data-augmented-ui":"border tl-clip tr-clip",className:"controls-title",onClick:()=>K("effects"),"aria-controls":"section-effects","aria-expanded":k.effects,children:[e.jsx("h3",{id:"title-effects",children:"Effects Controls"})," ",k.effects?y.DOWN:y.RIGHT]}),k.effects&&e.jsxs("section",{id:"section-effects","aria-labelledby":"title-effects",children:[e.jsx("div",{className:"control-group",children:e.jsxs("label",{className:"checkbox-label",children:[e.jsx("span",{children:"Glow"}),e.jsx("input",{"data-augmented-ui":"border tl-clip br-clip",type:"checkbox",checked:b,onChange:()=>{d(b?0:1)}})]})}),b&&e.jsx("div",{className:"control-group",children:e.jsxs("label",{className:"slider-label",children:[e.jsx("span",{children:"Glow Intensity:"}),e.jsx("input",{type:"range",min:$.min,max:$.max,step:$.step,value:x,onChange:n=>d(parseFloat(n.target.value)),className:"slider-input"}),e.jsx("span",{children:(x??0).toFixed(2)})]})}),e.jsx("div",{className:"control-group",children:e.jsxs("label",{className:"checkbox-label","data-tooltip-id":"controls-tooltip","data-tooltip-html":"Shows red and blue shifts in the accretion disk",children:[e.jsx("span",{children:"Doppler Shift"}),e.jsx("input",{"data-augmented-ui":"border tl-clip br-clip",type:"checkbox",checked:R,onChange:n=>J(n.target.checked)})]})}),R&&e.jsx(e.Fragment,{children:e.jsx("div",{className:"control-group",children:e.jsxs("label",{className:"slider-label",children:[e.jsx("span",{children:"Doppler Intensity:"}),e.jsx("input",{type:"range",min:0,max:2,step:.1,value:V,onChange:n=>h(parseFloat(n.target.value)),className:"slider-input"}),e.jsx("span",{children:V.toFixed(2)})]})})}),e.jsx("div",{className:"control-group",children:e.jsxs("label",{className:"checkbox-label","data-tooltip-id":"controls-tooltip","data-tooltip-html":"Makes one side brighter and the other dimmer.<br>Only works when dopler shift is active",children:[e.jsx("span",{children:"Beaming"}),e.jsx("input",{"data-augmented-ui":"border tl-clip br-clip",type:"checkbox",checked:O,onChange:n=>B(n.target.checked)})]})}),O&&e.jsx(e.Fragment,{children:e.jsx("div",{className:"control-group",children:e.jsxs("label",{className:"slider-label",children:[e.jsx("span",{children:"Beaming Intensity:"}),e.jsx("input",{type:"range",min:0,max:2,step:.1,value:v,onChange:n=>w(parseFloat(n.target.value)),className:"slider-input"}),e.jsx("span",{children:v.toFixed(2)})]})})}),e.jsx("div",{className:"control-group",children:e.jsxs("label",{className:"checkbox-label","data-tooltip-id":"controls-tooltip","data-tooltip-html":"Toggle a relativistic jet emitted from the poles.<br>Shown when black hole rotation > 0",children:[e.jsx("span",{children:"Relativistic Jet"}),e.jsx("input",{"data-augmented-ui":"border tl-clip br-clip",type:"checkbox",checked:N,onChange:n=>X(n.target.checked)})]})}),e.jsx("div",{className:"control-group",children:e.jsxs("label",{className:"slider-label","data-tooltip-id":"controls-tooltip","data-tooltip-html":"Controls the spin of the black hole<br/>0 = non-rotating<br/>0.998 = maximum rotation CCW<br/>-0.998 = maximum rotation CW",children:[e.jsx("span",{children:"Black Hole Rotation:"}),e.jsx("input",{type:"range",min:ne.ROTATION.MIN,max:ne.ROTATION.MAX,step:.001,value:C,onChange:n=>T(parseFloat(n.target.value)),className:"slider-input"}),e.jsx("span",{children:C.toFixed(3)})]})})]}),e.jsxs("button",{id:"button-disk","data-augmented-ui":"border tl-clip tr-clip",className:"controls-title",onClick:()=>K("disk"),"aria-controls":"section-disk","aria-expanded":k.disk,children:[e.jsx("h3",{id:"title-disk",children:"Disk Controls"})," ",k.disk?y.DOWN:y.RIGHT]}),k.disk&&e.jsxs("section",{id:"section-disk","aria-labelledby":"title-disk",children:[M!=="no_disk"&&e.jsx("div",{className:"control-group",children:e.jsxs("label",{className:"slider-label",children:[e.jsx("span",{children:"Disk Intensity:"}),e.jsx("input",{type:"range",min:_.diskIntensity.min,max:_.diskIntensity.max,step:_.diskIntensity.step,value:A,onChange:n=>D(parseFloat(n.target.value)),className:"slider-input"}),e.jsx("span",{children:A==null?void 0:A.toFixed(2)})]})}),e.jsx("div",{className:"control-group",children:e.jsxs("label",{className:"slider-label",children:[e.jsx("span",{children:"Disk Inner Radius:"}),e.jsx("input",{type:"range",min:_.diskInnerRadius.min,max:_.diskInnerRadius.max,step:_.diskInnerRadius.step,value:ae,onChange:n=>Ee(parseFloat(n.target.value)),className:"slider-input"}),e.jsx("span",{children:ae.toFixed(2)})]})}),e.jsx("div",{className:"control-group",children:e.jsxs("label",{className:"slider-label",children:[e.jsx("span",{children:"Disk Width:"}),e.jsx("input",{type:"range",min:_.diskWidth.min,max:_.diskWidth.max,step:_.diskWidth.step,value:le,onChange:n=>Ie(parseFloat(n.target.value)),className:"slider-input"}),e.jsx("span",{children:le.toFixed(2)})]})})]}),e.jsxs("button",{id:"button-textures","data-augmented-ui":"border tl-clip tr-clip",className:"controls-title",onClick:()=>K("textures"),"aria-controls":"section-textures","aria-expanded":k.textures,children:[e.jsx("h3",{id:"title-textures",children:"Textures Controls"}),k.textures?y.DOWN:y.RIGHT]}),k.textures&&e.jsxs("section",{id:"section-textures","aria-labelledby":"title-textures",children:[e.jsx("div",{className:"control-group",children:e.jsxs("label",{className:"select-label",children:[e.jsx("span",{children:"Disk:"}),e.jsx("select",{"data-augmented-ui":"tl-clip bl-clip border br-clip tr-clip",value:M,onChange:ye,className:"select-input",children:ht.map(n=>e.jsx("option",{value:n.value,children:n.label},n.value))})]})}),e.jsx("div",{className:"control-group",children:e.jsxs("label",{className:"checkbox-label",children:[e.jsx("span",{children:"Stars"}),e.jsx("input",{"data-augmented-ui":"border tl-clip br-clip",type:"checkbox",checked:W,onChange:n=>P(n.target.checked)})]})}),e.jsx("div",{className:"control-group",children:e.jsxs("label",{className:"checkbox-label",children:[e.jsx("span",{children:"Milky Way"}),e.jsx("input",{"data-augmented-ui":"border tl-clip br-clip",type:"checkbox",checked:Y,onChange:n=>q(n.target.checked)})]})})]}),e.jsxs("button",{id:"button-camera","data-augmented-ui":"border tl-clip tr-clip",className:"controls-title",onClick:()=>K("camera"),"aria-controls":"section-camera","aria-expanded":k.camera,children:[e.jsx("h3",{id:"title-camera",children:"Camera Controls"}),k.camera?y.DOWN:y.RIGHT]}),k.camera&&e.jsx("section",{id:"section-camera","aria-labelledby":"title-camera",children:e.jsx("div",{className:"control-group",children:e.jsxs("label",{className:"checkbox-label",children:[e.jsx("span",{children:"Orbit Camera"}),e.jsx("input",{"data-augmented-ui":"border tl-clip br-clip",type:"checkbox",checked:ee,onChange:n=>F(n.target.checked)})]})})})]}),e.jsxs("footer",{"data-augmented-ui":"bl-clip b-clip br-clip",className:"controls-footer",children:[e.jsx("button",{"data-augmented-ui":"br-clip tr-clip tl-clip bl-clip border",onClick:Te,className:"button reset-button",title:"Reset all settings to their default values",children:"Reset to Defaults"}),e.jsx("button",{"data-augmented-ui":"br-clip tr-clip tl-clip bl-clip border",onClick:o,className:"button fullscreen-button",title:"Toggle Full Screen",children:"Toggle Full screen"})]})]})})]})},Ot=({size:o=60,color:t="var(--accent-color)",thickness:r=6})=>{const u={width:o,height:o,borderWidth:`${r}px`,borderLeftColor:t,marginTop:-(o/2)};return e.jsx("div",{style:u,className:"loading-spinner"})},Rt=()=>{const o=Se(),t=vt(),[r,u]=i.useState(!1),l=600;i.useEffect(()=>{u(!0);const m=setTimeout(()=>{u(!1)},l);return()=>clearTimeout(m)},[t,o==null?void 0:o.active]);const c=()=>{o!=null&&o.active?o.exit():o.enter()};return e.jsx(e.Fragment,{children:e.jsx(Ae,{handle:o,children:e.jsxs("div",{className:"app",children:[r?e.jsx(Ot,{}):e.jsx(Dt,{}),e.jsx(jt,{onFullScreen:c})]})})})};Ne.createRoot(document.getElementById("root")).render(e.jsx(Rt,{}));
