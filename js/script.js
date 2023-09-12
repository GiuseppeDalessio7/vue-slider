const { createApp } = Vue

createApp({
    data() {
        return {
            activeImage: 0, // slide attiva
            // active : 
            autoplayInterval: null,
            autoplayEnabled: true,
            mouseover: "",
            mouseleave: "",

            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ]
        }
    },

    created() {
        this.Autoplay(); // prendo la funzione funzione autoplay creando una funzione created
    },
    methods: {
        avanti() {
            
            this.activeImage++;

            if (this.activeImage > this.slides.length - 1) {
                this.activeImage = 0;
            }
        },
        indietro() {
            this.activeImage--;

            if (this.activeImage < 0) {

                this.activeImage = this.slides.length - 1;

            }
        },

        showImg(index) {
            this.activeImage = index;
        },

       
       
       
        Autoplay() {
            if (this.autoplayEnabled) {
              this.autoplayInterval = setInterval(() => {
                // Passa alla prossima immagine
                this.activeImage = (this.activeImage + 1) % this.slides.length;
              }, 3000); // Intervallo di 3 secondi 
            } else {
              clearInterval(this.autoplayInterval); // Fermare l'autoplay se disabilitato
            }
          },
       
          autoplayon() {
            this.autoplayEnabled = true;
            this.Autoplay(); // Chiamare Autoplay() quando si abilita
          },
          autoplayoff() {
            this.autoplayEnabled = false;
            this.Autoplay(); // Chiamare Autoplay() quando si disabilita
          },
         
       
    },
   
   
   


}).mount('#app')




/* 

Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.

Bonus:
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
*/