import { CommonModule, KeyValue } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-portfolio-sidenav',
  imports: [CommonModule],
  templateUrl: './portfolio-sidenav.component.html',
  styleUrl: './portfolio-sidenav.component.scss'
})
export class PortfolioSidenavComponent implements AfterViewInit, OnInit {
  public categories = [
    {
      category: "Unity",
      icon: "img/unity-ico.png",
      items: [
        { displayName: "Composite Lightmaps", target: "html/composite-lightmaps.html", thumb: "img/thumb/composite-lightmaps-thumb.png" },
        { displayName: "Thief FP Controller", target: "html/thief-fp-controller.html", thumb: "img/thumb/thief-fp-controller-thumb.png" },
      ],
    },
    {
      category: "bpy",
      icon: "img/blender-ico.png",
      items: [
        { displayName: "Easy Baker", target: "html/easy-baker.html", thumb: "img/thumb/easy-baker-thumb.png" },
        { displayName: "UV Packer", target: "html/uv-packer.html", thumb: "img/thumb/uv-packer-thumb.png" },
      ],
    },
    {
      category: "Python",
      icon: "img/python-ico.png",
      items: [
        { displayName: "Palletizer", target: "html/palettizer.html", thumb: "img/thumb/palettizer-thumb.png" },
      ],
    },
    {
      category: "3D Art",
      icon: "img/3d-ico.png",
      items: [
        { displayName: "Wizard's Mansion", target: "html/wizards-mansion.html", thumb: "img/thumb/house-thumb.jpg" },
        { displayName: "My Apartment", target: "img/apartment/apartment.png", thumb: "img/thumb/apartment-thumb.png" },
        { displayName: "Tech Truck", target: "img/thumb/truck.gif", thumb: "img/thumb/truck.gif" },
      ],
    },
    {
      category: "2D Art",
      icon: "img/2d-ico.png",
      items: [
        { displayName: "Windows End", target: "img/art/windows-end.png", thumb: "img/art/windows-end.png" },
        { displayName: "Blue 1", target: "img/art/blue1.png", thumb: "img/art/blue1.png" },
        { displayName: "Blue 2", target: "img/art/blue2.png", thumb: "img/art/blue2.png" },
        { displayName: "RW", target: "img/art/rw.png", thumb: "img/art/rw.png" },
        { displayName: "POV-Ray Vial", target: "img/art/pov-ray-blood.gif", thumb: "img/art/pov-ray-blood.gif" },
      ],
    },
    
  ];

  readonly MAX_BORDER_WIDTH = 64;
  readonly MIN_BORDER_WIDTH = 1;

  @ViewChildren('linkElems') links!: QueryList<ElementRef>;

  private containerElem: HTMLElement;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef,
  ) {
    this.containerElem = this.el.nativeElement.querySelector(".container");
  }

  ngAfterViewInit(): void {
    this.updateBorders();
    this.cdr.detectChanges();

  }

  ngOnInit(): void {
    this.containerElem = this.el.nativeElement.querySelector(".container");
  }


  public updateBorders() {
    if (!this.containerElem || !this.links) {
      return;
    }
    const containerHeight = this.containerElem.clientHeight;
    const containerRect = this.containerElem.getBoundingClientRect();


    for (const item of this.links) {
      const elem: HTMLElement = item.nativeElement;

      const linkRect = elem.getBoundingClientRect();
      
      const linkTop = linkRect.top - containerRect.top;
      const linkBottom = containerRect.bottom - linkRect.bottom;

      if (linkBottom >= 0 && linkBottom <= containerHeight) {
        const normalizedPosition = linkTop / (containerHeight - linkRect.height);

        let borderTopWidth = (this.MAX_BORDER_WIDTH - this.MIN_BORDER_WIDTH) * normalizedPosition + this.MIN_BORDER_WIDTH;
        let borderBottomWidth = (this.MAX_BORDER_WIDTH - this.MIN_BORDER_WIDTH) * (1 - normalizedPosition) + this.MIN_BORDER_WIDTH;

        borderTopWidth = Math.max(this.MIN_BORDER_WIDTH, borderTopWidth - this.MAX_BORDER_WIDTH / 2);
        borderBottomWidth = Math.max(this.MIN_BORDER_WIDTH, borderBottomWidth - this.MAX_BORDER_WIDTH / 2);

        this.renderer.setStyle(elem, 'borderTopWidth', `${borderTopWidth}px`);
        this.renderer.setStyle(elem, 'borderBottomWidth', `${borderBottomWidth}px`);
      }
    }
  }

  public onScroll() {
    this.updateBorders();
  }
}

interface Project {
  displayName: string;
  target: string;
  thumb?: string;
}