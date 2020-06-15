import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "./index/index.component";
import { PlaylistsComponent } from "./playlists/playlists.component";
import { TopArtistsComponent } from "./top-artists/top-artists.component";
import { TopTracksComponent } from "./top-tracks/top-tracks.component";
import { RecentsComponent } from "./recents/recents.component";
const routes: Routes = [
  { path: "", component: IndexComponent },
  { path: "artists", component: TopArtistsComponent },
  { path: "tracks", component: TopTracksComponent },
  { path: "playlists", component: PlaylistsComponent },
  { path: "recent", component: RecentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
