// Example usage - you can call this function with any message
// showDarkSoulsNotification('YOU DIED', 3000);
// showDarkSoulsNotification('ENEMY FELLED', 2000);
class DarkSoulsNotification {
  constructor() {
    // Remove existing overlay if present
    const existingOverlay = document.querySelector('.ds-overlay');
    if (existingOverlay) {
      existingOverlay.remove();
    }
  }

  show(message, duration = 3000) {
    // Create overlay element
    const overlay = document.createElement('div');
    overlay.className = 'ds-overlay';
    
    // Create notification wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'ds-notification-wrapper';
    
    // Create main notification text element
    const notification = document.createElement('div');
    const isYouDied = message.toUpperCase() === 'YOU DIED';
    const colorClass = isYouDied ? 'red' : 'gold';
    notification.className = 'ds-notification ' + colorClass;
    notification.textContent = message;
    
    // Create ghost copy of notification
    const ghostNotification = document.createElement('div');
    ghostNotification.className = 'ds-notification ghost ' + colorClass;
    ghostNotification.textContent = message;
    
    wrapper.appendChild(ghostNotification);
    wrapper.appendChild(notification);
    overlay.appendChild(wrapper);
    document.body.appendChild(overlay);
    
    // Play audio sound
    const audio = new Audio('https://us-tuna-sounds-files.voicemod.net/e0368dff-514e-4ccd-bf7a-464f46c07d8a-1676915576697.mp3');
    audio.volume = 0.67; // Set volume (0.0 to 1.0)
    audio.play().catch(error => {
      // Handle autoplay restrictions - user interaction may be required
      console.log('Audio playback failed:', error);
    });
    
    // Trigger fade in
    setTimeout(() => {
      overlay.classList.add('active');
    }, 10);
    
    // Auto-hide after duration
    setTimeout(() => {
      overlay.classList.add('fade-out');
      overlay.classList.remove('active');
      
      // Remove from DOM after animation
      setTimeout(() => {
        overlay.remove();
      }, 600);
    }, duration);
  }
}

function showDarkSoulsNotification(message, duration = 3000) {

}
