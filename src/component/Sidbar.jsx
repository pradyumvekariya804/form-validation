import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link } from "react-router-dom";

function App() {
    const { collapseSidebar } = useProSidebar();

    return (
        <>
            <div>
                <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
                    <Sidebar style={{ height: "100vh" }}>
                        <Menu>
                            <MenuItem
                                icon={<MenuOutlinedIcon />}
                                onClick={() => {
                                    collapseSidebar();
                                }}
                                style={{ textAlign: "center" }}
                            >
                                {" "}
                                <h2>Admin</h2>
                            </MenuItem>
                            <SubMenu icon={<HomeOutlinedIcon />} label="Product">
                                <MenuItem icon={<PeopleOutlinedIcon />}><Link to="/Product/Brand">Brand</Link></MenuItem>
                                <MenuItem icon={<PeopleOutlinedIcon />}><Link to="/Product/Products">Products</Link></MenuItem>
                            </SubMenu>
                            <SubMenu icon={<HomeOutlinedIcon />} label="Betch">
                                <MenuItem icon={<PeopleOutlinedIcon />}><Link to="/Betch/NewBetch">NewBetch</Link></MenuItem>
                                <MenuItem icon={<PeopleOutlinedIcon />}><Link to="/Betch/VerifyBetch">VerifyBetch</Link></MenuItem>
                                <MenuItem icon={<PeopleOutlinedIcon />}><Link to="/Betch/ConfigurBetch">ConfigurBetch</Link></MenuItem>
                                <MenuItem icon={<PeopleOutlinedIcon />}><Link to="/Betch/StartBech">StartBech</Link></MenuItem>
                                <MenuItem icon={<PeopleOutlinedIcon />}><Link to="/Betch/PushBetch">PushBetch</Link></MenuItem>
                                <MenuItem icon={<PeopleOutlinedIcon />}><Link to="/Betch/CloseBetch">CloseBetch</Link></MenuItem>
                                <MenuItem icon={<PeopleOutlinedIcon />}><Link to="/Betch/CancleBetch">CancleBetch</Link></MenuItem>
                                <MenuItem icon={<PeopleOutlinedIcon />}><Link to="/Betch/ViewBetch">ViewBetch</Link></MenuItem>
                                <MenuItem icon={<PeopleOutlinedIcon />}><Link to="/Betch/OfflinePrinting">OfflinePrinting</Link></MenuItem>
                            </SubMenu>
                            <SubMenu icon={<HomeOutlinedIcon />} label="Reports">
                                <MenuItem icon={<PeopleOutlinedIcon />}><Link to="/Reports/BetchRelationShip">BetchRelationShip</Link></MenuItem>
                                <MenuItem icon={<PeopleOutlinedIcon />}><Link to="/Reports/XMLUpload">XMLUpload</Link></MenuItem>
                                <MenuItem icon={<PeopleOutlinedIcon />}><Link to="/Reports/BetchReport">BetchReport</Link></MenuItem>
                                <MenuItem icon={<PeopleOutlinedIcon />}><Link to="/Reports/ProductReport">ProductReport</Link></MenuItem>
                                <MenuItem icon={<PeopleOutlinedIcon />}><Link to="/Reports/AuditTryal">AuditTryal</Link></MenuItem>
                                <MenuItem icon={<PeopleOutlinedIcon />}><Link to="/Reports/PCMapReport">PCMapReport</Link></MenuItem>
                                <MenuItem icon={<PeopleOutlinedIcon />}><Link to="/Reports/DiagnosisReport">DiagnosisReport</Link></MenuItem>
                                <MenuItem icon={<PeopleOutlinedIcon />}><Link to="/Reports/ProductionReport">ProductionReport</Link></MenuItem>
                            </SubMenu>
                            <SubMenu icon={<HomeOutlinedIcon />} label="Setting-and-Utility">
                                <MenuItem icon={<PeopleOutlinedIcon />}><Link to="/SettingandUtility/CompnyDetails">CompnyDetails</Link></MenuItem>
                                <MenuItem icon={<PeopleOutlinedIcon />}><Link to="/SettingandUtility/Backup">Backup</Link></MenuItem>
                                <MenuItem icon={<PeopleOutlinedIcon />}><Link to="/SettingandUtility/Restore">Restore</Link></MenuItem>
                                <MenuItem icon={<PeopleOutlinedIcon />}><Link to="/SettingandUtility/User">User</Link></MenuItem>
                                <MenuItem icon={<PeopleOutlinedIcon />}><Link to="/SettingandUtility/AdminPassword">AdminPassword</Link></MenuItem>
                                <MenuItem icon={<PeopleOutlinedIcon />}><Link to="/SettingandUtility/LineHardwareConfig">LineHardwareConfig</Link></MenuItem>
                                <MenuItem icon={<PeopleOutlinedIcon />}><Link to="/SettingandUtility/LabelLayoutPrinting">LabelLayoutPrinting</Link></MenuItem>
                                <MenuItem icon={<PeopleOutlinedIcon />}><Link to="/SettingandUtility/UseracessManagement">UseracessManagement</Link></MenuItem>
                            </SubMenu>
                        </Menu>
                    </Sidebar>
                </div>
            </div>
        </>
    );
}

export default App;