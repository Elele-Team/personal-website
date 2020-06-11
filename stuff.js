// password generator

function extra() {
    var length = 16,
        charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*',
        generated = '';
    for (var i = 0, n = charset.length; i < length; ++i) {
        generated += charset.charAt(Math.floor(Math.random() * n));
    }
    prompt('Here is your generated password.', generated);
  }

  // popup
  function myFunction() {
    var popup = document.getElementById("myPopup");
   popup.classList.toggle("show");
   }

   // audio
       var audio = document.getElementById("player");
       audio.volume = 0.1;

       // clock
       function clock() {
           var d = new Date();
           var hours = d.getHours();
           var minutes = d.getMinutes();
           var seconds = d.getSeconds();

           if (hours <= 9) hours = "0" + hours;
           if (minutes <= 9) minutes = "0" + minutes;
           if (seconds <= 9) seconds = "0" + seconds;

           date_time = hours + ":" + minutes + ":" + seconds;
               if (document.layers) {
                   document.layers.doc_time.document.write(date_time);
                   document.layers.doc_time.document.close();
               }
           else document.getElementById("doc_time").innerHTML = date_time;
               setTimeout("clock()", 1000);
       }
       clock();

// date
 document.getElementById("jack1").innerHTML = formatAMPM();
   function formatAMPM() {
       var d = new Date(),
           minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
           hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
           ampm = d.getHours() >= 12 ? 'pm' : 'am',
           months = ['January','Febuary','March','April','May','June','July','August','September','October','November','December'],
           days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
       return days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear();
       }

   class TextScramble {
     constructor(el) {
       this.el = el
       this.chars = ' '
       this.update = this.update.bind(this)
     }
     setText(newText) {
       const oldText = this.el.innerText
       const length = Math.max(oldText.length, newText.length)
       const promise = new Promise((resolve) => this.resolve = resolve)
       this.queue = []
       for (let i = 0; i < length; i++) {
         const from = oldText[i] || ''
         const to = newText[i] || ''
         const start = Math.floor(Math.random() * 40)
         const end = start + Math.floor(Math.random() * 40)
         this.queue.push({ from, to, start, end })
       }
       cancelAnimationFrame(this.frameRequest)
       this.frame = 0
       this.update()
       return promise
     }
     update() {
       let output = ''
       let complete = 0
       for (let i = 0, n = this.queue.length; i < n; i++) {
         let { from, to, start, end, char } = this.queue[i]
         if (this.frame >= end) {
           complete++
           output += to
         } else if (this.frame >= start) {
           if (!char || Math.random() < 0.28) {
             char = this.randomChar()
             this.queue[i].char = char
           }
           output += `${char}`
         } else {
           output += from
         }
       }
       this.el.innerHTML = output
       if (complete === this.queue.length) {
         this.resolve()
       } else {
         this.frameRequest = requestAnimationFrame(this.update)
         this.frame++
       }
     }
     randomChar() {
       return this.chars[Math.floor(Math.random() * this.chars.length)]
     }
   }
   
   const phrases = [
     'J',
     'Ja',
     'Jac',
     'Jack',
     'Jacke',
     'Jackel',
     'Jackele',
     'Jackelel',
     'Jackelele'
   ]
   
   const el = document.querySelector('title')
   const fx = new TextScramble(el)
   
   let counter = 0
   const next = () => {
     fx.setText(phrases[counter]).then(() => {
       setTimeout(next, 500)
     })
     counter = (counter + 1) % phrases.length
   }
   
   next()
