package truong.tu_dien;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.HashMap;
import java.util.Map;

@Controller
public class DictionaryController {
    private static final Map<String, String> list = new HashMap<>();
    static {
        list.put("chào", "Hello");
        list.put("buồn", "sad");
        list.put("vui", "happy");
        list.put("cười", "haha");
        list.put("đi", "go");

    }
    @GetMapping("/form")
    public String translate(@RequestParam(required = false) String word, Model model) {

        if (word == null) {
            return "list";
        }
        String result = list.get(word);
        model.addAttribute("word", word);
        model.addAttribute("result", result);
        return "list";
    }


}
