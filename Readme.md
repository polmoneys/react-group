### TLDR


Interfaces are made up of a wild combination of materials, how should we "group" them ?

React implementation of [css-group](https://github.com/polmoneys/css-group).


### Get started

Import/Install into your project and compose specific variants out of them: 

````typescript
import {Card,List,Panel} from 'react-group';
import { PanelProps } from 'react-group/src/types';

interface MyPanelProps extends PanelProps {
    highlighted?:boolean
}

const MyDesignSystemPanel =(props:MyPanelProps) => <Panel {...props} {...hightlighted && {className:"red-500"}}/>;

const MyDesignSystemPanelContent = ({children}:ReactNode)=> <Col px={3}>{children} </Col> ;


````

Import styles once. 

````typescript

// core
import 'react-group/src/group.css';

// optional utilities
import 'react-group/src/group-utils.css';

````


### How to

No build step, 'pack it' in a .tgz file:

```bash

    # "build"
    npm run pack

```

To consume it locally, run on destination project: 

```bash

    # developing 
    npm run link

```

### Inspiration 💐


> Our requirements are more modest but at the same time more responsible: 
> buildings, furniture, drinking glasses may well be consumer items that 
> we can destroy without regret after they have served for some short or 
> long period, but while we use them we expect them to fullfill their role and serve us perfectly, so perfectly that we can also derive aesthetic 
> enjoyment from observing them in use. 

Erik Gunnar Asplund on **Swedish Grace**.

