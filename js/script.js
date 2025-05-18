function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

function goToLatestBlog() {
    const firstBlogLink = document.querySelector('.blog-btn .link')
    if (firstBlogLink) {
        window.location.href = firstBlogLink.href
    }
}
