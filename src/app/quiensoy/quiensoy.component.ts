import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiensoy',
  templateUrl: './quiensoy.component.html',
  styleUrls: ['./quiensoy.component.css']
})
export class QuiensoyComponent implements OnInit {


public disponible:boolean=true;

public contenido:string;


public c_boton:string[]=[
  'border-2', 'border-solid', 'w-48', 'h-8', 'rounded-lg', 'shadow-lg', 'px-2',  'mx-2', 'my-2', 'estiloboton', 'text-white', 'text-center'
]

public c_container:string[]=[
  'container', 'p-3', 'mx-auto', 'my-auto', 'flex', 'flex-row', 'md:flex-no-wrap', 'items-center', 'justify-center',  'flex-wrap'

]

public c_card:string[]=[

  'max-w-sm', 'rounded', 'overflow-hidden', 'shadow-lg', 'border-black', 'border-solid', 'border-2', 'md:mr-3'
]

public c_img:string[]=[

  'w-full', 'h-auto', 'm-0'

]

public c_cabecera:string[]=[

  'font-bold',  'text-xl', 'mb-2', 'p-3', 'm-2'

]

public c_contenido:string[]=[

  'flex', 'justify-center', 'items-center', 'flex-wrap'

]

public c_titulo:string[]=[
  'container', 'mx-auto', 'text-center', 'flex', 'justify-center', 'flex-wrap'
]


imagenug:string="assets/imagenes/ug4.jpg"
imagensacti:string="assets/imagenes/Sacti.jpg"
imageninocisa:string="assets/imagenes/1.jpg"

encabezadoinocisa:string="Instituto del Noroeste en Ciencias de la Salud"

encabezadosacti:string="Sacti Centro de Negocios Especializado en Compact"

encabezadoug:string="Universidad de Guanajuato Campus Irapuato Salamanca"

contenidoug:string="Es una institución de educación superior ubicada en el estado de Guanajuato en el centro del país, En el campus Irapuato Salamanca se encuentra el departamento de Ciencias de la vida, con enfoque a las areas de la Salud..."

contenidosacti:string="Con más de 10 años en el mercado, SACTI es una empresa lider en la Ciudad de los Mochis ,que ofrece servicios de software orientados al aumento de las ventas en el ámbito empresarial, con especialidad en Compacti..."

contenidoinocisa:string="El Instituto del Noroeste en Ciencias de la Salud es una organización Sinaloense orientada al cuidado y atención de los Adultos mayores en la ciudad de Los Mochis Sinaloa , apoyando a este sector tan vulnerable de la sociedad..."




imagenmuestra:string="assets/imagenes/portada.jpg";


estudios:any[]=
[
  {
    escuela:"Técnico en Informática Cetis #68 Los Mochis Sinaloa 2008-2011"
  },

  {
    escuela:"☺Estudios Superiores en la carrera de Ingeniería en  Desarrollo de Software(Sin concluir) Uas Los Mochis 2011-2013"
  },

  {
    escuela:"Estudios en la carrera de Ingenería Informática ITLM Los Mochis(traslado) 2013-2015"
  },

  {
    escuela:"Estudios en la carrera de Ingeniería Informática en Tecnológico Superior de Irapuato (Finalizados) 2016-2019"
  }


]

referencias:any[]=
[

{
  imagen:"assets/imagenes/ug4.jpg",
  descripcion:"fachadauniversidad",
  cabecera:"Universidad de Guanajuato Campus Irapuato Salamanca  Irapuato ",
  textotarjeta:"2017-2018. Realicé mis residencias profesionales en el departamento de Ciencias de la vida de la UG, en este periodo realicé actividades de programación , trabajando en un sistema Crud para el... ",
  direccion:"Ug"

},

{
  imagen:"assets/imagenes/1.jpg",
  descripcion:"fachadainocisa",
  cabecera:"Instituto del Noroeste en Ciencias de la Salud Inocisa Los Mochis",
  textotarjeta:"Del año 2015 y posteriormente del 2019 hasta la actualidad he sido el encargado del area de informática y Sistemas en Inocisa, realizando actividades de apoyo informático al area de dirección...",
  direccion:"#Inocisa"
},

{
  imagen:"assets/imagenes/Sacti.jpg",
  descripcion:"fachadaSacti",
  cabecera:"Sacti Centro de Negocios especializado en Compact",
  textotarjeta:"Del año 2015 y posteriormente del 2019 hasta la actualidad he sido el encargado del area de informática y Sistemas en Inocisa, realizando actividades de apoyo informático al area de dirección...",
  direccion:"#Sacti"
}




]



imagenprueba:any="assets/imagenes/cabecera.jpg"
imagendeprueba:any="assets/imagenes/rsz_portada.jpg"
sactiimagen:any="assets/imagenes/Sacti.jpg"
descargaimagen:any="assets/imagenes/UniversidadGuanajuato2.jpg"
descargada:any="assets/imagenes/11.jpg"

actividades:any[]=
[

{
  tipo:"Desarrollo, paginas web , diseño, implementación"

},

{
  tipo:"Desgloce"
}
]
  
instituciones:any[]=
[
{
  lugar:"Universidad de Guanajuato",
  periodo:"Junio 2017 Junio 2018",
  accion:"Mantenimiento Preventivo y correctivo a  equipos de Computo",
    accion2:"Desarrollo de SI para control de Inventarios de la institución",
    accion3:"Planificación y control de proyectos de software en la Division  de Ciencias de la Vida DICIVA UG",
    resena:"La Universidad de Guanajuato me trajo muchas cosas, en principio porque fueron mis inicios reales en la programación y segundo por haberme dado por primera vez un proyecto totalmente a mi cargo. El punto fuerte de el proyecto que realizamos fue el uso de html  y php para modelar un CRUD que al final cumplió sus propósitos en la universidad.",
    imagen1:"assets/imagenes/ug1.jpg",
    imagen2:"assets/imagenes/ug2.jpg",
    imagen3:"assets/imagenes/ug3.jpg",
    imagen4:"assets/imagenes/ug4.jpg",
    imagen5:"assets/imagenes/ug5.jpg",
    sitio:"ug",
    link:"https://drive.google.com/drive/folders/1wGG0o0xjElnh46JhAhcY6JmhWWcYlsOM?usp=sharing"
    
},

{
  lugar:"Sacti centro de Negocios Los Mochis Sin",
  periodo:"Marzo 2019 Marzo 2020",
  accion:"*Desarollo de SI con web design",
    accion2:"*Mantenimiento Preventivo y Correctictivo a Equipos de Computo",
    accion3:"*Planificación y control de proyecto de software",
    resena:"Ingrese  como parte del programa de capacitación de Jóvenes construyendo el futuro.Trabajé en el departamento de programación , apoyando en el desarollo de diferentes proyectos. Consolidé de mis conocimientos en Html y Css , agregando además el usoUML para el modelado proyectos de Software ,tecnologías git, github, con base en Angular(La herramienta de la empresa), diseño de algoritmos , POO y Bootstrap.",
    imagen1:"assets/imagenes/sacti1.jpg",
    imagen2:"assets/imagenes/sacti2.jpg",
    imagen3:"assets/imagenes/sacti3.jpg",
    imagen4:"assets/imagenes/sacti4.jpg",
    imagen5:"assets/imagenes/sacti5.jpg",
    sitio:"sacti",
    link:"https://drive.google.com/drive/folders/1BsJOB6cblE4vqdmUiJlwlpc_4Z-1VQyC?usp=sharing"
},

{
  lugar:" Inocisa Los Mochis",
  periodo:"Enero 2015-Julio 2015 Enero2019-Actualidad ",
  accion:"*Automatización de Procesos rutinarios en la empresa por medio de herramientas web",
    accion2:"*Mantenimiento Preventivo y Correctictivo a Equipos de Computo",
    accion3:"*Desarrollo de página web de la empresa con la cooperacion del departamentod de Marketing y publicidad  ",
    resena:"*Ingrese en 2015 , Empecé  en el área de recepción , mantenimiento a equipos de computo y atomatizando procesos con el uso de las Tics. Dejé la Institución en 2016 y regresé en 2019 , Mis actividades ahora son  en el área del desarrollo  de software de la empresa , usando el framework Angular para desarrollar los proyectos.",
    imagen1:"assets/imagenes/1.jpg",
    imagen2:"assets/imagenes/2.jpg",
    imagen3:"assets/imagenes/3.jpg",
    imagen4:"assets/imagenes/4.jpg",
    imagen5:"assets/imagenes/5.jfif",
   sitio:"inocisa",
   link:"https://drive.google.com/drive/folders/1FIUcr5434kfCH8hPfquTWruhUmK9ow8b?usp=sharing"
    
}

]

pruebas:any[]=
[
{
  metodo:"tohome()"
},

{
  metodo:"tocomplete()"
}

]



  constructor() {

      


   }




  ngOnInit() {
    
    this.contenido="Ver";


  }


  cambiarvalor()
  {
    this.disponible= !this.disponible
  }


  goug(){
    document.getElementById("ug").scrollIntoView();
    
  }

  gosac(){
    document.getElementById("sacti").scrollIntoView();
  }

  goin(){
    document.getElementById("inocisa").scrollIntoView();
  }

  tohome()
  {
document.getElementById("home").scrollIntoView();
  }


  tocomplete()
  {
document.getElementById("complete").scrollIntoView();
  }

}
