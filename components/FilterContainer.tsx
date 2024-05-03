import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { ExpandMore } from "@mui/icons-material";

type propsType = {
  categories?: string[];
  price?: string[];
  filter?: any;
  onChangeFilter: (key: string, value: string) => void;
};

const FilterContainer = () => {
  
  return (
    <div className="h-4/5 ml-2.5 mt-2.5 fixed border-r hidden md:block" style={{marginTop:"0.625rem",padding:"1.25rem",border: "solid #e5e7eb", borderLeft: 0,borderTop: 0,borderBottom: 0, height:"85%", position:"fixed"}}>
      
        <>
          <div className="">
            {/* Filter Categories */}
            <Typography className="ml-2">
              <b style={{    textDecorationLine: "underline", fontSize: "1.25rem", lineHeight: "1.75rem"}}>Filters</b>
            </Typography>
            <Accordion elevation={0} defaultExpanded={true}>
              <AccordionSummary
              style={{padding:0}}
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Vendors</Typography>
              </AccordionSummary>
              <AccordionDetails style={{paddingLeft:"0.5rem", paddingTop:"0", paddingRight:"0"}}>
                {/* {categories?.map((categoryElement: string, index: number) => { */}
                  {/* return ( */}
                    <div >
                      <input
                        type="checkbox"
                        id={"Vender1"}
                        name={"Vender1"}
                        value={"Vender1"}
                      />
                      <label style={{paddingLeft:"0.375rem"}} htmlFor={"Vender1"}>
                        {"Vender1"}
                      </label>
                      <br></br>
                    </div>
                  {/* ); */}
                {/* })} */}
              </AccordionDetails>
            </Accordion>
          </div>
        </>
     
    </div>
  );
};
export default FilterContainer;
