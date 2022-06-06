import { Switch, Route } from "react-router-dom";

import HalamanTidakAda from "./HalamanTidakAda/Lazy";
import HalamanUtama from "./HalamanUtama/Lazy";

const RuteAplikasi = () => {
  return (
    <Switch>
        <Route exact path="/">
            <HalamanUtama/>
        </Route>
        <Route path="/login">
            <HalamanUtama/>
        </Route>
        <Route>
            <HalamanTidakAda />
        </Route>
    </Switch>
  );
};

export default RuteAplikasi;
