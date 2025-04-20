import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/api/getData") // API lấy dữ liệu
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);