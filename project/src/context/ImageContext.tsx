import React, { useState, createContext, useContext, ReactNode, useEffect } from "react";

interface ImageContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  imagePath: string;
  setImagePath: React.Dispatch<React.SetStateAction<string>>;
}

const defaultState: ImageContextType = {
    isOpen: false,
    setIsOpen: () => {},
    imagePath: "",
    setImagePath: () => {},
};

const ImageContext = createContext<ImageContextType>(defaultState);
export const useImageContext = () => useContext(ImageContext);

const ImageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [imagePath, setImagePath] = useState("");

    return (
        <ImageContext.Provider value={{ isOpen, setIsOpen, imagePath, setImagePath }}>
            {children}
        </ImageContext.Provider>
    );
}

export default ImageProvider;