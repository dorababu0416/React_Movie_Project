import { useState } from "react";
import Button from '@mui/material/Button';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
// import Badge from '@mui/material/Badge';

export function Counter() {

  //setLike -- updates Like
  const [Like, setLike] = useState(0);
  const [disLike, setdisLike] = useState(0);
  return (<div className="counter-container">
    <Button variant="contained" onClick={() => setLike(Like + 1)} startIcon={<ThumbUpIcon />}>{Like}</Button>
    <Button variant="outlined" onClick={() => setdisLike(disLike + 1)} startIcon={<ThumbDownIcon />}>{disLike}</Button>
    {/* <Badge badgeContent={Like} color="primary" onClick={() => setLike(Like + 1)}><ThumbUpIcon color="action" /></Badge>
    <Badge badgeContent={disLike} color="primary" onClick={() => setdisLike(disLike + 1)}><ThumbDownIcon color="action" /></Badge> */}

  </div>);
}
