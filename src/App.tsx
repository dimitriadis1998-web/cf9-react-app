// import FunctionalComponent from "./components/LesssonTwo/FunctionalComponent.tsx";
//import ArrowFunctionalComponentWithProps from "./components/LessonThree/ArrowFunctionalComponentWithProps.tsx";
// import ClassComponent from "./components/LesssonTwo/ClassComponent.tsx";
// import ArrowFunctionalComponent from "./components/LesssonTwo/ArrowFunctionalComponent.tsx";
// import Layout from "./components/Layout.tsx";
// import PreviousValue from "./components/LessonSix/PreviousValue.tsx";
// import {useEffect} from "react";
import { Route, Routes} from "react-router";
// import NameChanger from "./components/LessonFive/NameChanger.tsx";
// import CounterAdvanced from "./components/LessonFour/CounterAdvanced.tsx";
// import Counter from "./components/LessonFour/Counter.tsx";
// import ClassCounter from "./components/LessonFour/ClassCounter.tsx";
// import NameChanger from "./components/LessonFive/NameChanger.tsx";
// import CounterWithCustomHook from "./components/LessonFive/CounterWithCustomHook.tsx";
// import WindowSize from "./components/LessonSix/WindowSize.tsx";
// import FocusInput from "./components/LessonSix/FocusInput.tsx";
import HomePage from "./pages/HomePage.tsx"
// import Counter from "./components/LessonFour/Counter.tsx";
// import CounterAdvanced from "./components/LessonFour/CounterAdvanced.tsx";
 // import Layout from "./components/Layout.tsx";
import RouterLayout from "./components/RouterLayout.tsx";
import UserPage from "./pages/UserPage.tsx";
import SearchPage from "./pages/SearchPage.tsx";



// type PropsA = {
//   title :string,
//   description : string,
// }
//
// type PropsB = {
//   title :string,
//   description : string,
// }
//
//
//
// // interface PropsTwo {
// //   title: string,
// //   description : string,
// // }
//
//
// // Union
// type Status = "Error" | "Info" | "Warning"
//
// // Tuples
//  type Coordinates = [number , number];
//
// // Functions
//
// type ClickHandler = (event :MouseEvent) => void;
//
// // Intersection
//
// type Props = PropsA & PropsB;
//
//
//
// interface PropsTwo {
//   title: string,
//   description : string,
// }
//
// interface PropsTwo {
//   price: number,
//   sort : number,
// }
//
// //PropsTwo = {title, description, price, sort}
//
// interface PropsThree extends PropsTwo {
//   image : string,
// }
//
// //PropsThree = {title, description, price, sort, image}



function App() {

    //
    // useEffect(() => {
    //     history.pushState({},"","/about")
    // }, []);

  return (
    <>
     {/*<FunctionalComponent/>*/}
     {/*<FunctionalComponent/>*/}
     {/*<FunctionalComponent/>*/}
     {/*/!* <ClassComponent/>*!/*/}
     {/*/!* <ArrowFunctionalComponent/>*!/*/}


      {/*<ArrowFunctionalComponentWithProps*/}
      {/*    title="Heading 1"/>*/}
      {/*<ArrowFunctionalComponentWithProps*/}
      {/*    title="Second Title"*/}
      {/*    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cum cupiditate dolorem earum inventore labore nemo, unde voluptate. Explicabo, voluptatum!" />*/}



        {/*<Layout>*/}
        {/*    /!*<ArrowFunctionalComponentWithProps*!/*/}
        {/*    /!*    title="Second Title"*!/*/}
        {/*    /!*    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cum cupiditate dolorem*!/*/}
        {/*    /!*    earum inventore labore nemo, unde voluptate. Explicabo, voluptatum!" />*!/*/}
        {/*    /!*<p className="text-red-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur culpa debitis dolore ea excepturi illo illum itaque laborum molestias,*!/*/}
        {/*    /!*    necessitatibus nisi obcaecati perspiciatis quos reprehenderit sunt, tempora tenetur totam ut?</p>*!/*/}
        {/*    /!*C*!/*/}
        {/*    /!*<Counter/>*!/*/}
        {/*    /!*<ClassCounter/>*!/*/}
        {/*    <CounterAdvanced/>*/}
        {/*</Layout>*/}

        {/*<Layout>*/}
        {/*    /!*<NameChanger/>*!/*/}
        {/*    /!*<CounterWithCustomHook/>*!/*/}
        {/*    /!*<WindowSize/>*!/*/}
        {/*    /!*<FocusInput/>*!/*/}
        {/*    <PreviousValue/>*/}
        {/*</Layout>*/}

        {/*<Routes>*/}
        {/*    <Route index element={<HomePage/>} />*/}
        {/*    <Route path="name-changer" element = {<NameChanger />} />*/}
        {/*    <Route path="counter" element = {<Counter />} />*/}
        {/*    <Route path="counter-advanced" element = {<CounterAdvanced />} />*/}
        {/*</Routes>*/}

        <Routes>
            <Route element={<RouterLayout/>}>
             <Route index element={<HomePage/>} />
              {/*<Route path = "examples">*/}
              {/*<Route path = "examples?">*/}
              {/*  <Route path="name-changer" element = {<NameChanger />} />*/}
              {/*  <Route path="counter" element = {<Counter />} />*/}
              {/*  <Route path="counter-advanced" element = {<CounterAdvanced />} />*/}
            {/* </Route>*/}
            {/*</Route>*/}


            <Route path="users">
                {/*<Route index element={<UserListPage />} />*/}
                <Route path=":userId" element={<UserPage />} />
            </Route>

                <Route path="search" element={<SearchPage />} />



              </Route>
            {/*<Route path="files/*" element={<File />} />*/}
            {/*let params = useParams();*/}
            {/*let filepath = params["*"]*/}
            {/*<Route path="*" element={<NotFoundPage />} />*/}
        </Routes>

    </>




  )
}

export default App
