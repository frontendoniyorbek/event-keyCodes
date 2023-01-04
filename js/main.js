const insert = document.getElementById('insert')
const title = document.querySelector('h1')

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
        <div class="key">
            ${e.key == ' ' ? 'Space' : e.key}
            <small>event.key</small>
        </div>

        <div class="key">
            ${e.keyCode}
            <small>event.keyCode</small>
        </div>

        <div class="key">
            ${e.code}
            <small>event.code</small>
        </div>
    `

    title.textContent = `${e.keyCode}`
})