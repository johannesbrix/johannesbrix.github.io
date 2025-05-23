// sidebar functionality 
function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

// blog functionality
function goToLatestBlog() {
    const firstBlogLink = document.querySelector('.blog-btn .link')
    if (firstBlogLink) {
        window.location.href = firstBlogLink.href
    }
}

// share functionality
function shareBlogPost() {
    if (navigator.share) {
        navigator.share({
            title: document.title,
            url: window.location.href
        })
        .catch(error => console.error('Error sharing:', error));
    } else {
        // Fallback for browsers that don't support Web Share API
        const dummy = document.createElement('input');
        document.body.appendChild(dummy);
        dummy.value = window.location.href;
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
        
        const shareButton = document.querySelector('.share-button');
        const originalText = shareButton.textContent;
        shareButton.textContent = 'Link copied!';
        
        setTimeout(() => {
            shareButton.textContent = originalText;
        }, 2000);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const blogRows = document.querySelectorAll('.blog-row');
    blogRows.forEach(row => {
        row.addEventListener('click', function(event) {
            // Check if the click target is the button or a link inside the button
            if (event.target.closest('.blog-btn')) {
                // If the click is on the button or its children, let the default action proceed
                return;
            }

            const href = this.dataset.href;
            if (href) {
                window.location.href = href;
            }
        });
    });
});
