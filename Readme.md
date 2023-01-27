### TLDR


Interfaces are made up of a wild combination of materials, how should we "group" them ? React implementation of [css-group](https://github.com/polmoneys/css-group).


### Get started


````typescript

// import to use
import {Card,List,Panel} from 'react-group';

// import once 
import 'react-group/src/group.css';
// optional utilities
import 'react-group/src/group-utils.css';

````


### About

**Card**, **List** and **Panel** are generic **groups**, most likely you want to compose specific variants out of them. In its simplest form: 

````typescript

import {Card,List,Panel} from 'react-group';
import { PanelProps } from 'react-group/src/types';

interface MyPanelProps extends PanelProps {
    highlighted?:boolean
}

const MyDesignSystemPanel =(props:MyPanelProps) => <Panel {...props} {...(highlighted && {className:"red-500"})}/>;

````


A more realistic example could be to enhance it as a **compound** component.

Let's say our Cards under a specific feature contain a **Title** and some **Actions** (you may have seen them named CardHeader o CardFooter), you may be inclined to do some extra work to achieve the following **developer experience**.


````typescript

// goal 
const actions = [ 
{
    disabled:false,
    label: 'Cancel',
    onClick: previous
},
{
    disabled:false,
    label: 'Save',
    onClick: next
}
]

return (
<Card as="article" ratio="landscape">
    <Card.Title icon>Card Title</Card.Title>
    <p>Card content content content (...)</p>
    <Card.Actions actions={actions}/>
</Card>)


````


To accomplish it:


````typescript

// desing-system/packages/Card/index.tsx
import {ReactNode} from 'react';
import {Card} from 'react-group';

interface TitleProps  {
    children:string | ReactNode;
    icon?:boolean
}

const Title =(props:TitleProps) => <Row className="card:title"> <h2>{children}</h2><IconButton variant="cross" className="ml:auto"/> </Row>;

interface Action {
    label:string | ReactNode;
    onClick: () => void;
    disabled?:boolean;
}

interface Actions extends Array<Action>{}

interface ActionsProps  {
    actions:Actions;
}

const Actions =(props:TitleProps) => <Row className="card:actions"> {props.actions.map((action)=> <Button onClick={action.onClick}>{action.label}</Button> )} </Row>;


Card.Title = Title;
Card.Actions = Actions;


export default Card;


````

### Tooling

No build step, 'pack it' in a .tgz file.


```bash

    # "build"
    npm run pack

```

To consume it locally run on **destination project**.

```bash

    # developing 
    npm run link

```

### Roadmap

- [ ] port **view** and **item** group from ```css-group```

### Inspiration 💐


> Our requirements are more modest but at the same time more responsible: 
> buildings, furniture, drinking glasses may well be consumer items that 
> we can destroy without regret after they have served for some short or 
> long period, but while we use them we expect them to fullfill their role and serve us perfectly, so perfectly that we can also derive aesthetic 
> enjoyment from observing them in use. 

Erik Gunnar Asplund on **Swedish Grace**.


### Feedback 


[Twitter](https://twitter.com/polmoneys)

[polmoneys.com](https://polmoneys.com)
