// Archivo: script.js

document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('commentForm');
    const commentInput = document.getElementById('commentInput');
    const commentsList = document.getElementById('commentsList');

    // Cargar comentarios guardados
    const savedComments = JSON.parse(localStorage.getItem('comments')) || [];
    savedComments.forEach(comment => addCommentToDOM(comment));

    // Manejar el envío del formulario
    commentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const commentText = commentInput.value.trim();
        if (commentText !== '') {
            addCommentToDOM(commentText);
            saveComment(commentText);
            commentInput.value = '';
        }
    });

    // Agregar comentario al DOM
    function addCommentToDOM(comment) {
        const li = document.createElement('li');
        li.textContent = comment;
        commentsList.appendChild(li);
    }

    // Guardar comentario en almacenamiento local
    function saveComment(comment) {
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.push(comment);
        localStorage.setItem('comments', JSON.stringify(comments));
    }
});
