import {AppComponent} from "./app_cmp";

describe('1st tests', () => {
            
    it('true is true', () => expect(true).toEqual(true));
    
    it('null is not the same thing as undefined',
        
        () => expect(null).not.toEqual(undefined)
    
    );
            
});

describe ("AppComponent", () => {
    
    it("Should have name and surname", () => {
        
        let user = new AppComponent();
        expect(user.name).toEqual("Sourrue");
        expect(user.surname).toEqual("Kévin");
        
    });
    
});