import { useState } from "react";
import { MdSearch } from "react-icons/md";

const Search = ({onSearch}) => {
    const [search, setSearch] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        onSearch(search);
    }
    return (
        <form onSubmit={handleSubmit} className="flex items-center h-12 px-4 rounded-md shadow-md outline-none w-[478px]">
            <MdSearch/>
            <input 
                className="w-full h-full ml-2 bg-transparent outline-none"
                type="text" 
                placeholder="Select a country..." 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} />
        </form>    
    );
}
 
export default Search;