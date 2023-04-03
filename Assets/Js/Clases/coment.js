class Comentario{

    constructor (Usuario, Title, Texto, Calificacion){
        this.Usuario = Usuario;
        this.Title = Title;
        this.Texto = Texto;
        this.Calificacion = Calificacion;
    }

    get coment(){
        return this.mostrarComentario();
    }

    mostrarComentario(){
        return `El usuario ${this.Usuario} ha publicado un comentario. 
        Titulo: ${this.Title}.
        Texto: ${this.Texto}
        Calificacion: ${this.Calificacion}`
    }
}


const envviar = document.getElementById('enviar');

envviar.addEventListener('click', ()=>{
    let names = document.getElementById('name').value,
    titulo = document.getElementById('title').value,
    texto = document.getElementById('text').value,
    calificacion = document.getElementById('calificacion').value;

    const comenta = new Comentario(names, titulo, texto, calificacion)
    alert(comenta.coment);
})



