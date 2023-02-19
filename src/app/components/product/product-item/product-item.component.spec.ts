import { HttpClientModule } from '@angular/common/http'
import { NO_ERRORS_SCHEMA } from '@angular/core'
import { type ComponentFixture, TestBed } from '@angular/core/testing'

import { ProductItemComponent } from './product-item.component'

describe('ProductItemComponent', () => {
  let component: ProductItemComponent
  let fixture: ComponentFixture<ProductItemComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductItemComponent],
      imports: [HttpClientModule],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
      .compileComponents()

    fixture = TestBed.createComponent(ProductItemComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
