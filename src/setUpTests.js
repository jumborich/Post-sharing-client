import Enzyme from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// import EnzymeAdapter from "enzyme/build/EnzymeAdapter";

Enzyme.configure({adapter: new Adapter()});