class SimpleLoading{
	_state = false;
	_listeners = [];

	get state(){
		return this._state;
	}

	set state(val){
		if(this._state === val){
			return;
		}

		this._state = !!val;
		this._dispatch();
	}

	_dispatch(){
		for(let item of this._listeners){
			try{
				item(this._state);
			}catch(e){
				console.error(e);
			}
		}
	}

	listen(cb){
		this._listeners.push(cb);

		return () => {
			let index = this._listeners.indexOf(cb);
			if(index === -1){
				return;
			}

			this._listeners.splice(index, 1);
		};
	}

}

export default new SimpleLoading();
