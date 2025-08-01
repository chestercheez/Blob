// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Copy button functionality
    const copyButton = document.getElementById('copyButton');
    const contractCopyTop = document.getElementById('contractCopyTop');
    const contractText = document.getElementById('contractText');
    
        // Copy button functionality for both buttons
    function copyContractText(button) {
        const contractAddress = '0xe6fe5ba7ab8672900a2e0c031da3df121495224c';
        
        // Use modern clipboard API if available
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(contractAddress).then(function() {
                // Visual feedback
                const originalText = button.textContent;
                button.textContent = 'copied!';
                button.style.backgroundColor = '#4CAF50';
                
                setTimeout(function() {
                    button.textContent = 'click to copy contract address';
                    button.style.backgroundColor = '#ff6666';
                }, 2000);
            }).catch(function(err) {
                console.error('Failed to copy text: ', err);
                fallbackCopyTextToClipboard(contractAddress, button);
            });
        } else {
            // Fallback for older browsers
            fallbackCopyTextToClipboard(contractAddress, button);
        }
    }
    
    if (copyButton) {
        copyButton.addEventListener('click', function() {
            copyContractText(this);
        });
    }
    
    if (contractCopyTop) {
        contractCopyTop.addEventListener('click', function() {
            copyContractText(this);
        });
    }
    
    // Fallback copy function for older browsers
    function fallbackCopyTextToClipboard(text, button) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            const successful = document.execCommand('copy');
            if (successful) {
                // Visual feedback
                button.textContent = 'copied!';
                button.style.backgroundColor = '#4CAF50';
                
                setTimeout(function() {
                    button.textContent = 'click to copy contract address';
                    button.style.backgroundColor = '#ff6666';
                }, 2000);
            }
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
        }
        
        document.body.removeChild(textArea);
    }
    
    // Blob button functionality
    const blobButton = document.getElementById('blobButton');
    
    blobButton.addEventListener('click', function() {
        const tweetText = '$BLOB';
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
        
        // Open Twitter intent in new tab
        window.open(twitterUrl, '_blank');
        
        // Add a little bounce effect
        blobButton.style.transform = 'scale(0.95)';
        setTimeout(function() {
            blobButton.style.transform = '';
        }, 150);
    });
    
    // Add some fun hover effects for the blobby image
    const blobbyImage = document.querySelector('.blobby-image img');
    
    blobbyImage.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) rotate(2deg)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    blobbyImage.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
    
    // Typewriter effect for lore text
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }
    
    // Floating Blobby animations
    function animateFloatingBlobbies() {
        const floatingBlobbies = document.querySelectorAll('.floating-blobby');
        
        floatingBlobbies.forEach((blobby, index) => {
            setTimeout(() => {
                blobby.style.opacity = '1';
                blobby.style.transform = 'translateY(0) scale(1)';
            }, 1000 + (index * 200));
        });
    }
    
    // Countdown functionality
    function updateCountdown() {
        const targetDate = new Date('2025-08-01T19:00:00Z'); // August 1, 2025 at 7 PM UTC
        const now = new Date();
        const timeDifference = targetDate - now;
        
        if (timeDifference > 0) {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
            
            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        } else {
            // Countdown has ended
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
        }
    }
    
    // Update countdown every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Add some personality to the page load
    setTimeout(function() {
        const title = document.querySelector('.title');
        title.style.opacity = '0';
        title.style.transform = 'translateY(20px)';
        title.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(function() {
            title.style.opacity = '1';
            title.style.transform = 'translateY(0)';
        }, 100);
        
        // Start typewriter effect
        const loreText = document.getElementById('loreText');
        const originalText = loreText.textContent;
        typeWriter(loreText, originalText, 30);
        
        // Animate floating Blobbies
        animateFloatingBlobbies();
    }, 200);
}); 