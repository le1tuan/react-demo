import * as React from 'react';

const LeftSideClientPage = () => {
    const [firstOpen, setFirstOpen] = React.useState(false);
    // const [secondOpen, setSecondOpen] = React.useState(false);
    // const [thirdOpen, setThirdOpen] = React.useState(false);
    // const [fourOpen, setFourOpen] = React.useState(false);
    // const [fiveOpen, setFiveOpen] = React.useState(false);
    // const [sixOpen, setSixOpen] = React.useState(false);

    const handleFirstClick = () => {
        setFirstOpen(!firstOpen);
    };
    // const handleSecondClick = () => {
    //     setSecondOpen(!secondOpen);
    // };
    // const handleThirdClick = () => {
    //     setThirdOpen(!thirdOpen);
    // };
    // const handleFourClick = () => {
    //     setFourOpen(!fourOpen);
    // };
    // const handleFiveClick = () => {
    //     setFiveOpen(!fiveOpen);
    // };
    // const handleSixClick = () => {
    //     setSixOpen(!sixOpen);
    // };
    return (
        <div>
            <div className="left-header">
                <div>Dx</div>
                <div>Version 3.1</div>
            </div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className=" col-4 navbar-nav mx-auto">
                    <button type="button" className="nav-item col-12">
                        <div className="nav-item-icon"><i className="fas fa-home" /></div>
                        <div className="nav-item-text">Home</div>
                    </button>
                    <button type="button" className="nav-item col-12">
                        <div className="nav-item-icon"><i className="fas fa-home" /></div>
                        <div className="nav-item-text">Home</div>
                    </button>
                    <button type="button" className="nav-item col-12">
                        <div className="nav-item-icon"><i className="fas fa-home" /></div>
                        <div className="nav-item-text">Home</div>
                    </button>
                    <button type="button" className="nav-item nav-item-dropdown col-12" key="first-click" onClick={handleFirstClick}>
                        <div className="nav-item-icon"><i className="fas fa-home" /></div>
                        <div className="nav-item-text">Home</div>
                        <div className="icon-dropdown-down">
                            {firstOpen ? <i className="fas fa-chevron-down" /> : <i className="fas fa-chevron-up" />}
                        </div>
                    </button>
                </div>
            </nav>
        </div>
    );
};
export default LeftSideClientPage;
