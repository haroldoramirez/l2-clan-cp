package controllers;

import play.mvc.Controller;
import play.mvc.Result;

public class UsuarioController extends Controller {

    public Result perfil() {
        return ok(views.html.usuario.perfil.render());
    }

    public Result lista() {
        return ok(views.html.usuario.lista.render());
    }
}
