const Filter = ({ onFilter }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const filter = e.target.value;
    onFilter(filter);
  };
  return (
    <div className="flex">
      <select
        onChange={handleSubmit}
        className="outline-none"
        value="Filter By Religion"
      >
        <option className="option" value="Africa">
          Africa
        </option>
        <option className="option" value="America">
          America
        </option>
        <option className="option" value="Asia">
          Asia
        </option>
        <option className="option" value="Europe">
          Europe
        </option>
        <option className="option" value="Oceania">
          Oceania
        </option>
      </select>
    </div>
  );
};

export default Filter;
