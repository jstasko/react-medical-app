import React, {useEffect} from "react";
import {getPlayers} from "../services/PlayersService";
import {IPlayer} from "../entities/Player";

const Players: React.FC = () => {
  const [page, setPage] = React.useState<number>(0);
  const [size, setSize] = React.useState<number>(0);
  const [totalItems, setTotalItems] = React.useState<number>(0);
  const [totalPages, setTotalPages] = React.useState<number>(0);
  const [players, setPlayers] = React.useState<IPlayer[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  useEffect(() => {
    if (players.length === 0) {
      getPlayersData();
    }
  }, []);

  const getPlayersData = async () => {
    setLoading(true);
    const players = await getPlayers(page, size);
    setPlayers(players.data.data);
    setTimeout(() => {setLoading(false)}, 1000);
  }

  return (
    <div>{players.length !== 0 ? players[0].meno : 'Hello World'}</div>
  )
}

export default Players;
