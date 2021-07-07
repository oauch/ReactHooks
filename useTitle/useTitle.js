export const ustTitle = inititalTitle => {
    const {title, setTitle} = useState(inititalTitle);
    const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
    };
    useEffect(updateTitle, [title]);
    return setTitle;
};