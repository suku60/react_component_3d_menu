## React component: 3d boxes style menu.

This is a small and quick project where I created a react component which will be able to be used at any react project. 
I have used the hook useNavigate from react-router so keep in mind this will be a dependencie you'll have to install.


<a href="https://master.d25zrinbp7rhel.amplifyapp.com/" target="_blank">React component: 3d animated menu</a>  

![Readme-Menu](https://user-images.githubusercontent.com/96541489/170888585-c0010e4a-7e75-4a06-8909-ce10743547ad.png)

---

### How to use

You can copy this repository if you want to modify css itself or maybe use it as a template.
open a console and type ```git clone https://github.com/suku60/react_component_3d_menu```

Another option would be just copying the Menu component by itself.

#### Adding elements

Here you have an image of the Menu component displayed in app.js

![Readme-Explanation](https://user-images.githubusercontent.com/96541489/170888635-5b4afddf-f708-4890-8867-ad2f4f17edb4.png)

As you can see, the component has only one property called menuData which gives the component an object with an array containing as many objects as rows you have on the menu. This will be what you have to modify to use the 6 options you have as default, or else, add or delete as many options as you want. 

After that, you can see the routes with the different containers.

#### What to keep in mind modifying the rows.
Each row is represented by an object. Each object has 3 properties: zIndex, name, and path. 

zIndex will modify the position over the other elements. You will have to keep them in the order you have as default. For example, if you want to add a new row, the new object will have to be the first one but contain the higher zIndex. Since this new and first object will be the 7th element of the component, you need to use "7" as it's zIndex. (Which is the way to adress z-index property of css).

name will simply modify the paragraph displayed at this new element.

path will be the location this row will redirect you. As you will see down in routes, each route has a path corresponding to it's container. 

---

### Future developement

My intention is that you will also be able to modify some css's properties such as heigh and width of the whole block using only the props. 
