import { render, screen} from "@testing-library/react";
import AddTask from "@/app/components/AddTask";

describe("Add new task test suite", () =>{
    
    it("it should contain dialog", ()=>{
        render(<AddTask />)   // ARRANGE
    
        const getDialog = screen.getByRole('dialog')  //ACT
    
        expect(getDialog).toBeInTheDocument(); // ASSERT
    
    });
    
    it("it should contain placeholder text", ()=>{
        render(<AddTask />)   // ARRANGE
    
        const getPlaceholder = screen.getByPlaceholderText('Text')  //ACT
    
        expect(getPlaceholder).toBeInTheDocument(); // ASSERT
    
    });
});


    

