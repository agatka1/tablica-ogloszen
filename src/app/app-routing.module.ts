import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HomeComponent } from "./home/home.component";
import { DodajOgloszenieComponent } from "./home/dodaj-ogloszenie/dodaj-ogloszenie.component";
import { ZobaczOgloszenieComponent } from "./zobacz-ogloszenie/zobacz-ogloszenie.component";
import { EdytujOgloszenieComponent } from "./edytuj-ogloszenie/edytuj-ogloszenie.component";
import { ReklamaComponent } from "./reklama/reklama.component";

const routes: Routes = [
    { path: "", redirectTo: "/ogloszenia", pathMatch: "full" },
    { path: "ogloszenia", component: HomeComponent, children: [
        { path: "dodaj", component: DodajOgloszenieComponent },
    ] },
    { path: "edit", component: EdytujOgloszenieComponent },
    { path: "ogloszenia/:title", component: ZobaczOgloszenieComponent },
    { path: "ogloszenia/:title/edit", component: EdytujOgloszenieComponent },
    { path: "kup-reklame", component: ReklamaComponent },
    { path: "page-not-found", component: PageNotFoundComponent },
    { path: "**", redirectTo: "/page-not-found" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}
