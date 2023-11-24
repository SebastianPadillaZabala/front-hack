import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-modal-alerta',
  templateUrl: './modal-alerta.component.html',
  styleUrls: ['./modal-alerta.component.css']
})
export class ModalAlertaComponent implements OnInit{
  @Input() descripcion: string = 'Se ha activado el sensor de detección de humo en el área. Su seguridad es nuestra prioridad.';

  @Output() closeEnviado: EventEmitter<boolean> = new EventEmitter<boolean>();

  isPlaying: boolean = false;

  constructor( private route: Router) {}

  ngOnInit(): void {
    this.playSound();
  }

  ngOnDestroy() {
    this.pauseSound(); // Llama a pauseSound cuando el componente se destruye
  }

  closeModal() {
    this.closeEnviado.emit(true);
    if (this.isPlaying) {
      this.pauseSound();
    }

    this.route.navigate(['/show-sensor/1']);
  }


  playSound() {
    const audio = document.getElementById('modalAudio') as HTMLAudioElement;
    audio.play();
    this.isPlaying = true;
  }

  pauseSound() {
    const audio = document.getElementById('modalAudio') as HTMLAudioElement;
    audio.pause();
    audio.currentTime = 0;
    this.isPlaying = false;
  }

}

