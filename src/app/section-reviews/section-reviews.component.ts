import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ContainerComponent } from '../container/container.component';

@Component({
  selector: 'app-section-reviews',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule, ContainerComponent],
  templateUrl: './section-reviews.component.html',
  styleUrls: ['./section-reviews.component.css']
})
export class SectionReviewsComponent {
  reviews = [
    { name: 'Константинов Михаил Павлович', city: 'Санкт-Петербург', text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы'},
    { photo: 'user_2.png', name: 'Иван Иванов', city: 'Санкт-Петербург', text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.'},
    { photo: 'user_3.png', name: 'Артем Корнилов', city: 'Самара', text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.'},
    { name: 'Конов Алексей Павлович', city: 'Новосибирск', text: 'Каждый из нас понимает...'},
    { name: 'Стантинов Михаил', city: 'Екатеринбург', text: 'Каждый из нас понимает...'},
    { name: 'Констанов Александр Леонидович', city: 'Красноярск', text: 'Каждый из нас понимает...'},
    { name: 'Танов Павел Викторович', city: 'Тюмень', text: 'Каждый из нас понимает...'},
  ];

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: false,
    arrows: true,
      responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          infinite: false,
          dots: true,
        },
      },
    ],
  };
}
