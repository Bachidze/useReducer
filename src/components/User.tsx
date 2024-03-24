import  { useReducer } from "react";

interface Address {
    street: string;
    building: number;
}

interface Hobby {
    programming: {
        languages: string[];
    };
}

interface UserObj {
    name: string;
    address: {
        work: Address;
        home: Address;
    };
    hobby: Hobby;
}

type Action = 
    | { type: "CHANGE_STREET" }
    | { type: "CHANGE_NAME", payload: string };

const obj: UserObj = {
    name: "gio",
    address: {
        work: {
            street: 'nutsubidze 64',
            building: 64
        },
        home: {
            street: 'marjanishvili 12',
            building: 12
        }
    },
    hobby: {
        programming: {
            languages: ['HTML', "Css", "Javascript"]
        }
    }
};

const reducer = (state: UserObj, action: Action): UserObj => {
    switch (action.type) {
        case "CHANGE_STREET":
            return {
                ...state,
                address: {
                    ...state.address,
                    home: {
                        ...state.address.home,
                        street: 'tavisufleba',
                    }
                }
            };
        case "CHANGE_NAME":
            return {
                ...state,
                name: action.payload
            };
        default:
            return state;
    }
};

export default function User() {
    const [userObj, dispatch] = useReducer(reducer, obj);

    return (
        <div>
            <div>User Name: {userObj.name}</div>
            <div>User Address: {userObj.address.home.street}</div>
            <button onClick={() => dispatch({ type: "CHANGE_STREET" })}>
                Change home Street name
            </button>
            <button onClick={() => dispatch({ type: "CHANGE_NAME", payload: "New Name" })}>
                Change Name
            </button>
        </div>
    );
}
