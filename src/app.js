import "regenerator-runtime";;
import "bootstrap/dist/css/bootstrap.min.css";
import './script/component/Digimon-List';
import './script/component/navbar';
import './script/component/footer';
import {myDigimon, fresh, training, rookie, champion, ultimate } from './script/function/function';
import main from './script/view/main';

myDigimon();
fresh();
training();
rookie();
champion();
ultimate();
main();