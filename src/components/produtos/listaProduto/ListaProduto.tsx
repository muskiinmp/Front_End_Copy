import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import Produto from "../../../model/Produto";
import { busca, buscaProduto } from "../../../service/Service";
import { TokenState } from "../../../store/tokens/tokenReducer";

import './ListaProduto.css';

function ListaProduto() {

  let history = useNavigate()

  const [produtos, setProdutos] = useState<Produto[]>([])

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  async function getProduto() {
    await buscaProduto("/produtos/todos", setProdutos, {
      headers: {
        'Authorization': token
      }
    })
    
  }

  useEffect(() => {
    getProduto()
  }, [produtos.length])

  const useStyles = makeStyles({
    root: {
      maxWidth: 242,
    },
    media: {
      height: 258,
      width: 242
    },
  });
  const classes = useStyles();

  return (
    <>
      {
        produtos.map(produto => (
          <Box m={2} >
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media} style={{width:"242px", height:"298px"}}
                  image={produto.foto}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" style={{fontFamily:"jaldi", fontSize:"20px",color: "#785846"}}>
                   {produto.nome} 
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p"  style={{fontFamily:"jaldi", fontSize:"px",color: "B6917B"}}>
                   {produto.descricao}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p"  style={{fontFamily:"jaldi", fontSize:"px",color: "B6917B"}}>
                  R$ {produto.preco}
                  </Typography>
                </CardContent>              

              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5} >

                  <Link className="text-decoration-none" to={`/deletarProduto/${produto.id}`}>
                    <Box mx={1}>
                      <Button variant="contained" size='small' >
                        Deletar
                      </Button>
                    </Box>
                  </Link>

                  <Link className="text-decoration-none" to={`/criarProduto/${produto.id}`} >
                    <Box mx={1}>
                      <Button variant="contained" size='small' >
                        Atualizar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>

              </CardActionArea>

            </Card>
          </Box>
        ))}
    </>
  )
}

export default ListaProduto;