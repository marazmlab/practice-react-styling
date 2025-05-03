![React Styling Practice](./assets/img/Screenshot.jpg)

#  React Component Styling Practice

This repository is dedicated to practicing and mastering Styled Components in React.

**Main features**:
- Learn and implement Styled Components
- Gain practical experience in organizing styles for scalable applications.

&nbsp;

## 🔶 Technologies

![React](https://img.shields.io/badge/react-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=black)
![Styled Components](https://img.shields.io/badge/styled--components-%23DB7093.svg?style=for-the-badge&logo=styled-components&logoColor=white)
![CSS Modules](https://img.shields.io/badge/css--modules-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![SASS](https://img.shields.io/badge/sass-%23CC6699.svg?style=for-the-badge&logo=sass&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![Babel](https://img.shields.io/badge/babel-%23F9DC3E.svg?style=for-the-badge&logo=babel&logoColor=black)

&nbsp;


## 🔶 See also

Are you interested in **React** and **styling techniques**? See my other [project](https://github.com/marazmlab/task-react-styling).

&nbsp;

## 🔶 Installation

The project uses [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/). To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/devmentor-pl/practice-react-styling.git
   ```

2. Navigate to the project directory:
   ```bash
   cd practice-react-styling
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`.

&nbsp;

## 🔶 Tasks Overview

The project contains several tasks organized in folders `01` to `05`, each demonstrating different styling methods. Below is an overview of the tasks:

- **01** – Create an `<Alert>` component styled with **Styled Components**. The component should support variants like `primary` and `secondary`.
- **02** – Build a `<Button>` component similar to **React Bootstrap**, supporting props like `variant`, `size`, `active`, and `disabled`.
- **03** – Implement a `<Breadcrumb>` component with `<Breadcrumb.Item>` for navigation. It should support `href` and `active` props.
- **04** – Develop `<Tabs>` and `<Tab>` components to manage tabbed content. The active tab should dynamically update the displayed content.
- **05** – Create a `<Card>` component composed of subcomponents like `<Card.Img>`, `<Card.Body>`, `<Card.Title>`, and `<Card.Text>`. Use the previously created `<Button>` component within the card.

Each task includes specific instructions in its respective `README.md` file.

&nbsp;

## 🔶 Solutions provided in the project

### One of examples:
The `<Card>` component is a complex and reusable component built with subcomponents like `<Card.Img>`, `<Card.Body>`, `<Card.Title>`, and `<Card.Text>`. It demonstrates advanced component composition and integration with the previously created `<Button>` component.

```jsx
<Card>
  <Card.Img src="image.jpg" alt="Example" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>Some example text to build on the card title and make up the bulk of the card's content.</Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
```

This example showcases:
- **Dynamic styling**: Styled Components are used to style the card and its subcomponents.
- **Component composition**: The `<Card>` component is composed of smaller, reusable subcomponents.
- **Integration**: The `<Button>` component created in Task 02 is reused within the `<Card>` component.

For more details, refer to the implementation in [Task05.js](05/Task05.js) and the corresponding [README.md](05/README.md).

&nbsp;

## 🔶 Conclusions

- **Dynamic styling**: Styled Components were used extensively to enable dynamic and reusable styling across components.
- **Component composition**: Components like `<Card>` and `<Tabs>` were designed with subcomponents for better modularity and reusability.
- **Scalability**: The project demonstrates how to organize styles and components for scalable React applications.
- **Theming**: The use of `ThemeProvider` allows for centralized theme management, making it easier to maintain consistent styling.

This project provides a solid foundation for mastering React component styling techniques.

&nbsp;

## 🔶 Feel free to contact me

If you have any questions or feedback, feel free to reach out!  
Find me on [GitHub](https://github.com/marazmlab) or [LinkedIn](https://www.linkedin.com/in/belz/).

&nbsp;

## 🔶 Thanks / Special thanks / Credits

Thanks to my [Mentor - devmentor.pl](https://devmentor.pl/) – for providing me with this task and for code review.



