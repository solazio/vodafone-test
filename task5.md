You are mid/senior developer in some big long-term project A. You will be participating in this project for a long time. During the Scrum planning there was the following user story:
  As external portal user
  When I open external portal and the portal has widget from the project’s A
  Then I should see the increasing each second position of the virtual car and
  I should see the consumption of the fuel and
  I should see alert if there was too much fuel consumed.

Later our PO (product owner, who is sales consultant in other department) want to add some more features to that widget and make it more customizable. But it will be much later. You agreed that one of the junior developers will take that user story. User story is delivered for code review. Junior
developer has demonstrated it to PO and it seems for him done well.

Here will be the code from the junior developer. Please make code review (take in account that is only the first of multiple future code reviews):


### Comments
3: Please add a class to set the font size in the `index.scss` file (I assume one exists) which is already imported in the `index.js` file, and then apply that class to your `<h1>` element; Please use rem instead of pixels so the font size is responsive; Also you should set the font size value in a variable so it can be easily modified later if required

7: There is a typo in the function name CarsFuuel -> CarsFuel; Please convert the function to an arrow function (I assume everywhere else ES6+ syntax is used); You could use the UseMemo hook to memoize the component so it only renders when props change. Also you can move this component inside the `components` folder

8: Use a class instead of inline-styling, as I mentioned on line no. 3. As you already have an `<h1>` on line 53, this should become an `<h2>` perhaps, so the markup is semantic
12: You could use some ES6 syntax and just return Alert red text, as per requirements:
  ```
    return <h2 className='.is-red'>Alert</h2>;
  ```
Also please move this component to the `components` folder

28: The current best practices favour functionnal components and hooks over class components and lifecycle methods. Main reason is performance and shouldComponentUpdate that sometimes leads to bugs.

34: Name your state variables with meaningful names as that would make your code readable for you and others

40: After using setInterval don't forget to clean up after the component unmounts. You can do this using the useEffect hook:
  ```
    useEffect(() => {
      // Add here task that you need to execute every time the component is rendered

      return () => clearInterval(intervalId); // Here you do the clean up
    }, []);
  ```
48: These two lines will become absolete if you will use the useState hook and functional component instead
52: You can use React fragment `<></>`instead of a `<div></div>` so you don't render an unnecessary element
