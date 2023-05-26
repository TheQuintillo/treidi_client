import "../../app/globals.css";
function HeaderCoin() {
  return (
    <div className="flex justify-center items-center p-2 bg-gradient-to-b from-emerald-500 to-emerald-700">
      <img className="inline-block w-8 mr-3" src="/coin.png" alt="coin" />
      <p className="inline-block text-white">
        ¡Obtén 1000 Treidis al registrarte!
      </p>
    </div>
  );
}

export default HeaderCoin;
