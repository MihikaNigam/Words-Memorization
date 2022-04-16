package com.mihika.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mihika.model.Word;
import com.mihika.repository.WordsRepository;

@CrossOrigin(origins = "http://localhost:8080")
@RestController // to define controller and to bind return value to web res body
@RequestMapping("/api") // tells all api's in this controller start with this
public class WordsController {

	@Autowired // injecting repo bean here
	WordsRepository wordsRepo;

	@GetMapping("/words")
	public ResponseEntity<List<Word>> getAllWords() {
		try {
			List<Word> words = new ArrayList<>();
			wordsRepo.findAll().forEach(words::add);
			if (words.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(words, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/words/{id}")
	public ResponseEntity<Word> getWord(@PathVariable("id") int id) {
		try {
			Optional<Word> w = wordsRepo.findById(id);
			if (w.isPresent()) {
				return new ResponseEntity<>(w.get(), HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}

		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/words")
	public ResponseEntity<Word> addWord(@RequestBody Word word) {
		try {
			Word _wordData = wordsRepo.findByWord(word.getWord());
			if (_wordData == null) {
				Word _word = wordsRepo.save(new Word(word.getWord(), word.getMeaning()));
				return new ResponseEntity<>(_word, HttpStatus.CREATED);
			} else {
				return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
			}

		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/words/{id}")
	public ResponseEntity<Word> updateWord(@PathVariable("id") int id, @RequestBody Word word) {
		Optional<Word> wordData = wordsRepo.findById(id);
		if (wordData.isPresent()) {
			Word _word = wordData.get();
			_word.setWord(word.getWord());
			_word.setMeaning(word.getMeaning());
			return new ResponseEntity<>(wordsRepo.save(_word), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/words/{id}")
	public ResponseEntity<HttpStatus> deleteWord(@PathVariable("id") int id) {
		try {
			wordsRepo.deleteById(id);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.CONFLICT);
		}
	}

	@DeleteMapping("/words")
	public ResponseEntity<HttpStatus> deleteAllWords() {
		try {
			wordsRepo.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
