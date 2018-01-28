@eaters.each do |eater|
	json.set! eater.id do
		json.partial! 'eaters/eater', eater: eater
	end
end
