import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, makeStyles, Typography } from "@material-ui/core";
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

  const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
        minWidth: 242,
        minHeight: 258
    },
    media: {
      height: 258,
      width: 242
    },
  }))
  
  const classes = useStyles();

  return (
    <>
    <div className="backgroundProdutos">
     <div className={classes.root}>
            <Grid
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
      {
        produtos.map(produto => (
          <Box className="cardProduto" m={2} >
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media} style={{width:"242px", height:"298px"}}
                  image={produto.foto}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" style={{fontFamily:"jaldi", fontSize:"20px",color: "#785846", fontWeight:"bold"}}>
                   {produto.nome} 
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p"  style={{fontFamily:"jaldi", fontSize:"px"}}>
                   {produto.descricao}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p"  style={{fontFamily:"jaldi", fontSize:"18px",color: "#F27830"}}>
                  R$ {produto.preco}
                  </Typography>
                </CardContent>              

              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5} >

                  <Link className="text-decoration-none" to={`/criarProduto/${produto.id}`} >
                    <Box mx={1}>
                      <Button variant="contained" className="btnAtualizar"color="primary" size='small' >
                        Atualizar
                      </Button>
                    </Box>
                  </Link>

                  <Link className="text-decoration-none" to={`/deletarProduto/${produto.id}`}>
                    <Box mx={1}>
                      <Button variant="contained" className="btnDeletar" color="secondary" size='small' >
                        Deletar
                      </Button>
                    </Box>
                  </Link>

                </Box>
              </CardActions>

              </CardActionArea>

            </Card>
          </Box>
        ))}
        </Grid>
        </div>
        </div>
    </>
  )
}

export default ListaProduto;