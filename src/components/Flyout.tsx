import React from "react";
import { useListingsContext } from "../context/ListingsProvider";

const FlyoutContext = React.createContext<any>({});

function useFlyoutContext() {
    return React.useContext(FlyoutContext);
}

function Flyout(props: any) {

    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");
    const toggle = React.useCallback(() => setOpen(state => !state), []);

    return (
			<FlyoutContext.Provider value={{ open, toggle, value, setValue }}>
				<div className="flyout">{props.children}</div>
			</FlyoutContext.Provider>
		);
}

function Input(props:any) {
    const { value, toggle, setValue } = useFlyoutContext();

	return <input onFocus={toggle} onBlur={toggle} className="flyout-input" value={value} onChange={e => setValue(e.target.value)} placeholder="Enter an address, city ,or ZIP code" {...props} />;
}

function List(props: any) {

	const { open } = useFlyoutContext();

	return open && (
		<div className="flyout-list">
			<ul>{props.children}</ul>
		</div>
	);
}

function ListItem(props: any) {
    const { setValue } = useFlyoutContext();
    return (
			<li onMouseDown={() => setValue(props.name)} className="flyout-list-item">
				{props.children}
			</li>
		);
}

Flyout.Input = Input;
Flyout.List = List;
Flyout.ListItem = ListItem;

export default Flyout;