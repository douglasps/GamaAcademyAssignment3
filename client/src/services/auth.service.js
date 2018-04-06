var baseUrl = 'https://consulta-veiculos.nimble.com.br/v1/veiculos/';
export const AuthService = ($http) => {
    
    var items = [];
    const listar = () => {
        return $http({
            method: 'GET',
            url: baseUrl,
        }).then(function (response) {
            if (response.data)
                items = response.data;
        });
    };

    const listarGetState = () => {
        return items;
    }

    const salvar = (item) => {
        var metodo = 'POST';
        var url = baseUrl; 
        if(item._id)
        {
            metodo = 'PUT'
            url += item._id;
        }
        $http({
            method: metodo,
            url: url,
            data:{
                item: item.example
            }
        });
    };

    const excluir = (id) =>{
        $http({
            method: 'DELETE',
            url: baseUrl+id
        });
    }

    return { listar, listarGetState, salvar, excluir };
};
