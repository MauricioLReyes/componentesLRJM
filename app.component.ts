import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AutocompleteComponent } from "./componentes/autocomplete/autocomplete.component";
import { BadgeComponent } from './componentes/badge/badge.component';
import { ButtonToggleComponent } from "./componentes/button-toggle/button-toggle.component";
import { CardComponent } from "./componentes/card/card.component";
import { ChipsComponent } from "./componentes/chips/chips.component";
import { DatepickerComponent } from "./componentes/datepicker/datepicker.component";
import { DividerComponent } from "./componentes/divider/divider.component";
import { ExpansionPanelComponent } from "./componentes/expansion-panel/expansion-panel.component";
import { FormFieldComponent } from "./componentes/form-field/form-field.component";
import { GridListComponent } from "./componentes/grid-list/grid-list.component";
import { IconComponent } from "./componentes/icon/icon.component";
import { MenuComponent } from "./componentes/menu/menu.component";
import { ProgressBarComponent } from "./componentes/progress-bar/progress-bar.component";
import { ToolBarComponent } from "./componentes/tool-bar/tool-bar.component";
import { InputComponent } from "./componentes/input/input.component";
import { ListComponent } from "./componentes/list/list.component";
import { PaginatorComponent } from "./componentes/paginator/paginator.component";
import { ProgressSpinnerComponent } from "./componentes/progress-spinner/progress-spinner.component";
import { RadioButtonComponent } from "./componentes/radio-button/radio-button.component";
import { SelectComponent } from "./componentes/select/select.component";
import { SidenavComponent } from "./componentes/sidenav/sidenav.component";
import { SlideToggleComponent } from "./componentes/slide-toggle/slide-toggle.component";
import { SliderComponent } from "./componentes/slider/slider.component";
import { SnackbarComponent } from "./componentes/snackbar/snackbar.component";
import { SortHeaderComponent } from "./componentes/sort-header/sort-header.component";
import { TableComponent } from "./componentes/table/table.component";
import { TooltipComponent } from "./componentes/tooltip/tooltip.component";
import { TreeComponent } from "./componentes/tree/tree.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    AutocompleteComponent,
    BadgeComponent,
    ButtonToggleComponent,
    CardComponent,
    ChipsComponent,
    DatepickerComponent,
    DividerComponent,
    ExpansionPanelComponent,
    FormFieldComponent,
    GridListComponent,
    IconComponent,
    MenuComponent,
    ProgressBarComponent,
    ToolBarComponent,
    InputComponent,
    ListComponent,
    PaginatorComponent,
    ProgressSpinnerComponent,
    RadioButtonComponent,
    SelectComponent,
    SidenavComponent,
    SlideToggleComponent,
    SliderComponent,
    SnackbarComponent,
    SortHeaderComponent,
    TableComponent,
    TooltipComponent,
     TreeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'unidadDos';
}
