import React from 'react'
import { render } from 'react-dom'
import SauceList from './component/SauceList';

import { BrowserRouter as Router} from "react-router-dom";

render(
	<Router>
    <SauceList/>
    </Router>,
    document.getElementById('home')
);