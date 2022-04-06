const SetRadio = ({onRadioChangeHandler}) => {
  return (
    <div onChange={onRadioChangeHandler}>
      <input type="radio" id="robot" name="imgSet" value="1" defaultChecked />
      <label htmlFor="robot">Robot</label>
      <input type="radio" id="monsters" name="imgSet" value="2" />
      <label htmlFor="monsters">Monsters</label>
      <input type="radio" id="meoww" name="imgSet" value="4" />
      <label htmlFor="meoww">Meoww</label>
      <input type="radio" id="hooman" name="imgSet" value="5" />
      <label htmlFor="hooman">Hooman</label>
    </div>
  );
};

export default SetRadio;
