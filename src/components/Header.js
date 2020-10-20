import React from 'react';

const Header=()=>{
    return(
        <div className="jumbotron py-5">
            <h1 className="display-1"><span class="material-icons brand-icon">fastfood</span>Food Recipes</h1>
            <div class="input-group w-50 mx-auto">
                <input type="text" placeholder="Find Your recipes..." class="form-control" /> 
                <div class="input-group-append">
                <button className="btn btn-dark">Search Recipes</button>
                </div>
            </div>
        </div>
    );
}

export default Header;